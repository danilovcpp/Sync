using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using Sync.Models;

namespace Sync.Controllers
{
	[Route("sync")]
	[Produces("application/json")]
	public class SyncController : Controller
	{
		private readonly IContext _context;

		public SyncController(IContext context)
		{
			_context = context;
		}

		[HttpGet("component")]
		public async Task<IActionResult> Get()
		{
			var history = _context.GetHistory();
			return Ok(history);
		}

		[HttpGet("component/{commitRecid}")]
		public async Task<IActionResult> Get(string commitRecid)
		{
			var history = _context.GetHistory(commitRecid);
			return Ok(history);
		}

		[HttpGet("component/{lastUpdate:datetime}")]
		public async Task<IActionResult> Get(DateTime lastUpdate)
		{
			var records = _context.GetComponents().Where(c => c.RecUpdated > lastUpdate);
			return Ok(records);
		}

		[HttpGet("component/pull/{commitRecid}")]
		public async Task<IActionResult> Pull()
		{
			var history = _context.GetHistory();
			return Ok(history);
		}

		[HttpPost("component/push")]
		public async Task<IActionResult> Push([FromBody] List<HistoryRecord> commits)
		{
			foreach (var commit in commits)
			{
				var component = JToken.Parse(commit.Diff).ToObject<Component>();
				_context.AddComponent(component);
			}

			return Ok();
		}
	}
}
