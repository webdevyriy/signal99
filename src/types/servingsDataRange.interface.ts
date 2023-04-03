import { ServingsDataInfo } from './servingsDataInfo.interface';

export interface ServingsDataRange extends ServingsDataInfo {
    servingsRange: number[];
}

export default ServingsDataRange;