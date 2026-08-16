import { useState } from "react";

function useShowAllItems(items, minCount) {
  const [isShowAll, setIsShowAll] = useState(false);

  const show = isShowAll ? items : items.filter((item, i) => i < minCount);

  return { show, isShowAll, setIsShowAll };
}

export default useShowAllItems;
