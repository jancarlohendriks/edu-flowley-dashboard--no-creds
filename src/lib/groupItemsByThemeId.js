export const groupItemsByThemeId = (list) =>
  list.reduce((groups, item) => {
    const themeId = groups[item.themeId] || []
    themeId.push(item)
    groups[item.themeId] = themeId
    return groups
  }, {})
