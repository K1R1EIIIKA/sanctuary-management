using Microsoft.AspNetCore.Mvc;

namespace Project1.Controllers;

public interface IControl<T>
{
    public IEnumerable<T> Get();
    
    public ActionResult<T> GetById(int id);
}