import { HistoryRecord } from "./HistoryRecord";

export interface SyncNode {
	id: number;
	host: string;
	table: string;
	commit?: string;
	pullCount?: number;
	historyRecords?: HistoryRecord[];
}