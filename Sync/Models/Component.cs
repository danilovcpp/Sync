using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sync.Models
{
	public class Component
	{
		public string Recid { get; set; }
		public string Field1 { get; set; }
		public string Field2 { get; set; }
		public DateTime RecCreated { get; set; }
		public DateTime RecUpdated { get; set; }
	}
}
