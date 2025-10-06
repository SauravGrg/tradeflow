using Microsoft.EntityFrameworkCore;
using tradeflowBackend.Data;
using tradeflowBackend.Models;
using tradeflowBackend.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<StockService>();
builder.Services.AddDbContext<AppDbContext>(options => options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddHttpClient<StockService>();
builder.Services.Configure<ApiSetting>(builder.Configuration.GetSection("ApiSetting"));
builder.Services.Configure<StockSetting>(builder.Configuration.GetSection("StockSettings"));

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReact", policy => policy
    .WithOrigins("http://localhost:5173")
    .AllowAnyHeader()
    .AllowAnyMethod());
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("AllowReact");
app.UseAuthorization();
app.MapControllers();

app.Run();
