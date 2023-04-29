import request from '../../request.js'

export default async function movieActors (root) {
  const { id } = root
  const ENDPOINT = `/titles/${id as string}/main_actors`
  const response = await request(ENDPOINT)
}
