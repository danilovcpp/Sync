import { HistoryRecord } from "./HistoryRecord";

export interface SyncNode {
	id: number;
	host: string;
	table: string;
	commit?: string;
	lastUpdate?: string;
	pullCount?: number;
	records?: any[];
	historyRecords?: HistoryRecord[];
}