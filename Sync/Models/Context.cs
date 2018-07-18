using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sync.Models
{
	public class Context : IContext
	{
		public List<Component> Components { get; set; }
		public List<HistoryRecord> History { get; set; }

		public Context()
		{
			Components = new List<Component>();
			History = new List<HistoryRecord>();
		}

		public void AddComponent(Component component)
		{
			Components.Add(component);
			History.Add(new HistoryRecord { Date = DateTime.Now, Recid = Guid.NewGuid().ToString(), Diff = JToken.FromObject(component).ToString() });
		}

		public List<HistoryRecord> GetHistory(string commitRecid)
		{
			var commit = History.FirstOrDefault(h => h.Recid == commitRecid);
			if(commit != null)
			{
				var query = from h in History
							where h.Date > commit.Date
							select h;

				var histories = query.ToList();
				return histories;
			}

			return new List<HistoryRecord>();
		}

		public List<Component> GetComponents()
		{
			return Components;
		}

		public List<HistoryRecord> GetHistory()
		{
			return History;
		}
	}
}
