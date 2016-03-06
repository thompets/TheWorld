using Microsoft.AspNet.Mvc;
using System;
using TheWorld.Models;

namespace TheWorld.Controllers.Api
{
	public class TripController : Controller
	{
		private IWorldRepository _repository;

		public TripController(IWorldRepository repository)
		{
			_repository = repository;
		}

		[HttpGet("api/trips")]
		public JsonResult Get()
		{
			return Json(new { name = "Pete" });
		}
	}
}