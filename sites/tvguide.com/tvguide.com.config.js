const axios = require('axios')
const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc')
const timezone = require('dayjs/plugin/timezone')

dayjs.extend(utc)
dayjs.extend(timezone)

module.exports = {
  site: 'tvguide.com',
  days: 2,
  url: function ({ date, channel }) {
    const [providerId, channelSourceIds] = channel.site_id.split('#')
    const url = `https://backend.tvguide.com/v1/xapi/tvschedules/tvguide/${providerId}/web?start=${date
      .startOf('d')
      .unix()}&duration=1440&channelSourceIds=${channelSourceIds}`

    return url
  },
  async parser({ content }) {
    const programs = []
    const items = parseItems(content)
    for (let item of items) {
      const details = await loadProgramDetails(item)
      programs.push({
        title: item.title,
        sub_title: details.episodeTitle,
        description: details.description,
        season: details.seasonNumber,
        episode: details.episodeNumber,
        rating: parseRating(item),
        categories: parseCategories(details),
        start: parseTime(item.startTime),
        stop: parseTime(item.endTime)
      })
    }

    return programs
  },
  async channels() {
    const providers = [9100001138]

    let channels = []
    for (let providerId of providers) {
      const data = await axios
        .get(
          `https://backend.tvguide.com/v1/xapi/tvschedules/tvguide/serviceprovider/${providerId}/sources/web`
        )
        .then(r => r.data)
        .catch(console.log)

      data.data.items.forEach(item => {
        channels.push({
          lang: 'en',
          site_id: `${providerId}#${item.sourceId}`,
          name: item.fullName
        })
      })
    }

    return channels
  }
}

function parseRating(item) {
  return item.rating ? { system: 'MPA', value: item.rating } : null
}

function parseCategories(details) {
  return Array.isArray(details.genres) ? details.genres.map(g => g.name) : []
}

function parseTime(timestamp) {
  return dayjs.unix(timestamp)
}

function parseItems(content) {
  const data = JSON.parse(content)
  if (!data.data || !Array.isArray(data.data.items) || !data.data.items.length) return []

  return data.data.items[0].programSchedules
}

async function loadProgramDetails(item) {
  item.programDetails = item.programDetails.replace('player1-backend-prod-internal.apigee.net', 'backend.tvguide.com')
  const data = await axios
    .get(item.programDetails)
    .then(r => r.data)
    .catch(err => {
      console.log(err.message)
    })
  if (!data || !data.data || !data.data.item) return {}

  return data.data.item
}
