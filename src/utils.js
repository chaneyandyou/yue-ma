
export function getRedirectPath({ type, avatar }) {
  let url = (type === 'car') ? '/car' : '/guest'
  if(!avatar) {
    url += 'info'
  }
  return url
}
