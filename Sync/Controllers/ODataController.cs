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
	[Route("odata")]
	[Produces("application/json")]
	public class ODataController : Controller
	{
		private readonly IContext _context;

		public ODataController(IContext context)
		{
			_context = context;
		}

		[HttpGet("component")]
		public async Task<IActionResult> Get()
		{
			return Ok(_context.GetComponents());
		}

		[HttpPost("component")]
		public async Task<IActionResult> Post([FromBody] Component component)
		{
			_context.AddComponent(component);
			return Ok();
		}
	}
}