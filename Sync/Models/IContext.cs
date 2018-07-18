using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sync.Models
{
	public interface IContext
	{
		void AddComponent(Component component);
		List<Component> GetComponents();
		List<HistoryRecord> GetHistory();
		List<HistoryRecord> GetHistory(string commitRecid);
	}
}
