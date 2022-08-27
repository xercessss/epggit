const axios = require('axios')
const dayjs = require('dayjs')

const API_ENDPOINT = `https://obo-prod.oesp.telenettv.be/oesp/v4/BE/eng/web`

module.exports = {
  site: 'telenettv.be',
  url: function ({ date }) {
    return `${API_ENDPOINT}/programschedules/${date.format('YYYYMMDD')}/1`
  },
  async parser({ content, channel, date }) {
    let programs = []
    let items = parseItems(content, channel)
    if (!items.length) return programs
    const d = date.format('YYYYMMDD')
    const promises = [
      axios.get(`${API_ENDPOINT}/programschedules/${d}/2`),
      axios.get(`${API_ENDPOINT}/programschedules/${d}/3`),
      axios.get(`${API_ENDPOINT}/programschedules/${d}/4`)
    ]
    await Promise.allSettled(promises)
      .then(results => {
        results.forEach(r => {
          if (r.status === 'fulfilled') {
            items = items.concat(parseItems(r.value.data, channel))
          }
        })
      })
      .catch(console.error)
    // items.forEach(item => {
    for (let item of items) {
        const detail = await loadProgramDetails(item)
        programs.push({
            title: item.t,
            description: parseDescription(detail),
            category: parseCategory(detail),
            season: parseSeason(detail),
            episode: parseEpisode(detail),
            start: parseStart(item),
            stop: parseStop(item)
        })
    }
    //)

    return programs
  },
  async channels() {
    const data = await axios
      .get(`${API_ENDPOINT}/channels`)
      .then(r => r.data)
      .catch(console.log)

    return data.channels.map(item => {
      return {
        lang: 'be',
        site_id: item.id.replace('lgi-be-prod-master:28001-', ''),
        name: item.title
      }
    })
  }
}

async function loadProgramDetails(item) {
    if (!item.i) return {}
    const url = `${API_ENDPOINT}/listings/${item.i}`
    const data = await axios
      .get(url)
      .then(r => r.data)
      .catch(console.log)
    return data || {}
  }

function parseStart(item) {
  return dayjs(item.s)
}

function parseStop(item) {
  return dayjs(item.e)
}

function parseItems(content, channel) {
  const data = typeof content === 'string' ? JSON.parse(content) : content
  if (!data || !Array.isArray(data.entries)) return []
  const entity = data.entries.find(e => e.o === `lgi-be-prod-master:${channel.site_id}`)

  return entity ? entity.l : []
}

function parseDescription(detail){
    return detail.program.longDescription ||  null
}

function parseCategory(detail) {
    let categories = []
    detail.program.categories.forEach(category => {
        categories.push(category.title)
    });
    return categories
  }

  function parseSeason(detail) {
    return detail.program.seriesNumber || null
  }

  function parseEpisode(detail) {
    return detail.program.seriesEpisodeNumber || null
  }

