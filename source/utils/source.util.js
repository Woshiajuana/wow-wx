
import { UtilConfig } from '../config'

const { SOURCE_BASE_URL } = UtilConfig;

export default (name) => SOURCE_BASE_URL + name;
