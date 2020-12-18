import Observer from "../utils/observer";
import {FilterType} from "../const";

class Filter extends Observer {
  constructor() {
    super();
    this._activeFilter = FilterType.EVERYTHING;
  }

  setFilter(updateType, filter) {
    this._activeFilter = filter;
    this._notyfy(updateType, filter);
  }

  getFilter() {
    return this._activeFilter;
  }
}

export default Filter;
