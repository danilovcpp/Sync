using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sync.Models
{
	public class HistoryRecord
	{
		public string Recid { get; set; }
		public DateTime Date { get; set; }
		public string Diff { get; set; }
	}
}
