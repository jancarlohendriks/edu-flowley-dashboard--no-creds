export const groupItemsByToolId = (list) =>
  list.reduce((groups, item) => {
    const toolId = groups[item.toolId] || []
    toolId.push(item)
    groups[item.toolId] = toolId
    return groups
  }, {})
