import _ from "lodash";

export function Paginate(items, currentPage) {
  const startIndex = currentPage - 1;
  return _(items)
    .slice(startIndex)
    .take(1)
    .value();
}
