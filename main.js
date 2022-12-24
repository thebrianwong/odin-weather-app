(()=>{"use strict";const e=async e=>{const t=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=a0c9839361f301aa4ff8bb089dde2d79`);return 200===t.status?await t.json():Promise.reject(t)},t=async()=>{const e=Math.floor(508061*Math.random())-1,t=await fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=1&includeDeleted=NONE&offset=${e}`,{method:"GET",headers:{"X-RapidAPI-Key":"807ea18ec2msh3a2175b27cf041dp170feajsnf745f5536e94","X-RapidAPI-Host":"wft-geo-db.p.rapidapi.com"}});return 200===t.status?await t.json():Promise.reject(t)},n=(()=>{const e=e=>e.main.temp;return{getTemperatureFahrenheit:t=>{const n=9*(e(t)-273.15)/5+32;return Math.round(100*n)/100},getTemperatureCelsius:t=>{const n=e(t)-273.15;return Math.round(100*n)/100},getWeatherMain:e=>e.weather[0].main,getWeatherDescription:e=>e.weather[0].description,getWeatherIconCode:e=>e.weather[0].icon,getCityName:e=>e.name,getRandomCityName:e=>e.data[0].city}})(),r=e=>{(e=>{const t=n.getWeatherIconCode(e);document.querySelector(".weather-icon").src=`http://openweathermap.org/img/wn/${t}.png`})(e),(e=>{const t=n.getWeatherMain(e);document.querySelector(".weather-main").textContent=t})(e),(e=>{const t=n.getWeatherDescription(e);document.querySelector(".weather-description").textContent=t})(e),(e=>{const t=n.getTemperatureFahrenheit(e);document.querySelector(".temp-f").textContent=`${t}°F`})(e),(e=>{const t=n.getTemperatureCelsius(e);document.querySelector(".temp-c").textContent=`${t}°C`})(e),(e=>{const t=n.getCityName(e);document.querySelector(".city-name").textContent=t})(e),document.querySelector("#city").value=""},o=()=>{const e=document.querySelector(".weather-icon"),t=document.querySelector(".weather-main"),n=document.querySelector(".weather-description"),r=document.querySelector(".temp-f"),o=document.querySelector(".temp-c"),a=document.querySelector(".city-name");e.src="../dist/mickey.png",t.textContent="The sun might or might not be visible",n.textContent="hopefully the sky is still blue",r.textContent="Larger number°F",o.textContent="Smaller number°C",a.textContent="Disneyland"},a=e=>{document.querySelector(".error-message").textContent=e},c=e=>{!1===e.disabled?e.disabled=!0:e.disabled=!1},s=(()=>{const o=async()=>{const t=document.querySelector("#city").value;if(""!==t)try{const n=await e(t);r(n)}catch(e){a("Uh oh, looks like something went wrong! Check your spelling then try again!"),console.error(Error(e.statusText))}},s=async()=>{let o,i;const u=document.querySelector(".random-button");try{const a=await t();o=n.getRandomCityName(a),i=await e(o),r(i),c(u)}catch(e){404===e.status&&void 0===o?a("Hmm, it seems like we're running into some trouble. Try again!"):404===e.status&&void 0===i&&setTimeout(s,1500),console.error(Error(`${e.status} ${e.statusText}`))}};return{addUserInputListener:()=>{const e=document.querySelector(".search-button"),t=document.querySelector("#city"),n=document.querySelector(".random-button");e.addEventListener("click",o),t.addEventListener("keydown",(e=>{"Enter"===e.key&&o()})),n.addEventListener("click",(()=>{c(n),s()}))}}})();!async function(){try{const t=await e("Hell");r(t)}catch(e){o(),console.error(Error(`${e.status} ${e.statusText}. If you can see this, that means there was an issue with the OpenWeatherMap API!`))}}(),s.addUserInputListener()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQUEsTUFBTUEsRUFFbUJDLE1BQU9DLElBQzVCLE1BQU1DLFFBQWlCQyxNQUNyQixxREFBcURGLDRDQUV2RCxPQUF3QixNQUFwQkMsRUFBU0UsYUFDZ0JGLEVBQVNHLE9BSy9CQyxRQUFRQyxPQUFPTCxFQUFTLEVBWjdCSCxFQWNrQkMsVUFDcEIsTUFDTVEsRUFBa0JDLEtBQUtDLE1BRFgsT0FDaUJELEtBQUtFLFVBQXdCLEVBUTFEVCxRQUFpQkMsTUFDckIsc0ZBQXNGSyxJQVJ4RSxDQUNkSSxPQUFRLE1BQ1JDLFFBQVMsQ0FDUCxpQkFBa0IscURBQ2xCLGtCQUFtQiwrQkFPdkIsT0FBd0IsTUFBcEJYLEVBQVNFLGFBQ2dCRixFQUFTRyxPQUcvQkMsUUFBUUMsT0FBT0wsRUFBUyxFQ2hDN0JZLEVBQWEsTUFDakIsTUFBTUMsRUFBa0JDLEdBQVNBLEVBQUtDLEtBQUtDLEtBZ0IzQyxNQUFPLENBQ0xDLHlCQWhCZ0NILElBQ2hDLE1BQ01JLEVBQWtDLEdBRHpCTCxFQUFlQyxHQUNBLFFBQWUsRUFBSSxHQUNqRCxPQUFPUCxLQUFLWSxNQUFtQixJQUFiRCxHQUFvQixHQUFHLEVBY3pDRSxzQkFaNkJOLElBQzdCLE1BQ01PLEVBRFNSLEVBQWVDLEdBQ0wsT0FDekIsT0FBT1AsS0FBS1ksTUFBZ0IsSUFBVkUsR0FBaUIsR0FBRyxFQVV0Q0MsZUFSc0JSLEdBQVNBLEVBQUtTLFFBQVEsR0FBR1IsS0FTL0NTLHNCQVI2QlYsR0FBU0EsRUFBS1MsUUFBUSxHQUFHRSxZQVN0REMsbUJBUjBCWixHQUFTQSxFQUFLUyxRQUFRLEdBQUdJLEtBU25EQyxZQVJtQmQsR0FBU0EsRUFBS2UsS0FTakNDLGtCQVJ5QmhCLEdBQVNBLEVBQUtBLEtBQUssR0FBR2YsS0FVbEQsRUExQmtCLEdDRWJnQyxFQWdFNEJDLElBL0RULENBQUNBLElBQ3RCLE1BQU1DLEVBQWNyQixFQUFXYyxtQkFBbUJNLEdBQ3ZCRSxTQUFTQyxjQUFjLGlCQUMvQkMsSUFBTSxvQ0FBb0NILE9BQWlCLEVBNkQ5RUksQ0FBZUwsR0EzRE0sQ0FBQ0EsSUFDdEIsTUFBTU0sRUFBYzFCLEVBQVdVLGVBQWVVLEdBQ25CRSxTQUFTQyxjQUFjLGlCQUMvQkksWUFBY0QsQ0FBVyxFQXlENUNFLENBQWVSLEdBdkRhLENBQUNBLElBQzdCLE1BQU1TLEVBQXFCN0IsRUFBV1ksc0JBQXNCUSxHQUMxQkUsU0FBU0MsY0FDekMsd0JBRXdCSSxZQUFjRSxDQUFrQixFQW1EMURDLENBQXNCVixHQWpEUyxDQUFDQSxJQUNoQyxNQUFNVyxFQUFRL0IsRUFBV0sseUJBQXlCZSxHQUM3QkUsU0FBU0MsY0FBYyxXQUMvQkksWUFBYyxHQUFHSSxLQUFTLEVBK0N2Q0MsQ0FBeUJaLEdBN0NHLENBQUNBLElBQzdCLE1BQU1hLEVBQVFqQyxFQUFXUSxzQkFBc0JZLEdBQzFCRSxTQUFTQyxjQUFjLFdBQy9CSSxZQUFjLEdBQUdNLEtBQVMsRUEyQ3ZDQyxDQUFzQmQsR0F6Q0osQ0FBQ0EsSUFDbkIsTUFBTWUsRUFBV25DLEVBQVdnQixZQUFZSSxHQUNoQkUsU0FBU0MsY0FBYyxjQUMvQkksWUFBY1EsQ0FBUSxFQXVDdENDLENBQVloQixHQXBDYUUsU0FBU0MsY0FBYyxTQUMvQmMsTUFBUSxFQW9DUixFQXZFZmxCLEVBcUN5QixLQUMzQixNQUFNbUIsRUFBcUJoQixTQUFTQyxjQUFjLGlCQUM1Q2dCLEVBQXFCakIsU0FBU0MsY0FBYyxpQkFDNUNpQixFQUE0QmxCLFNBQVNDLGNBQ3pDLHdCQUVJa0IsRUFBZW5CLFNBQVNDLGNBQWMsV0FDdENtQixFQUFlcEIsU0FBU0MsY0FBYyxXQUN0Q29CLEVBQWtCckIsU0FBU0MsY0FBYyxjQUMvQ2UsRUFBbUJkLElBQU0scUJBQ3pCZSxFQUFtQlosWUFBYyx3Q0FDakNhLEVBQTBCYixZQUFjLGtDQUN4Q2MsRUFBYWQsWUFBYyxrQkFDM0JlLEVBQWFmLFlBQWMsbUJBQzNCZ0IsRUFBZ0JoQixZQUFjLFlBQVksRUFuRHhDUixFQXFEd0J5QixJQUNFdEIsU0FBU0MsY0FBYyxrQkFDL0JJLFlBQWNpQixDQUFPLEVBdkR2Q3pCLEVBeUR5QjBCLEtBQ0gsSUFBcEJBLEVBQU9DLFNBQ1RELEVBQU9DLFVBQVcsRUFFbEJELEVBQU9DLFVBQVcsQ0FDcEIsRUM1REVDLEVBQVksTUFDaEIsTUFBTUMsRUFBa0I5RCxVQUN0QixNQUFNK0QsRUFBaUIzQixTQUFTQyxjQUFjLFNBQVNjLE1BQ3ZELEdBQXVCLEtBQW5CWSxFQUNGLElBQ0UsTUFBTTdELFFBQWlCSCxFQUEwQmdFLEdBQ2pEOUIsRUFBdUMvQixFQU16QyxDQUxFLE1BQU84RCxHQUNQL0IsRUFDRSwrRUFFRmdDLFFBQVFELE1BQU1FLE1BQU1GLEVBQU1HLFlBQzVCLENBQ0YsRUFFSUMsRUFBb0JwRSxVQUN4QixJQUFJcUUsRUFDQUMsRUFDSixNQUFNQyxFQUFlbkMsU0FBU0MsY0FBYyxrQkFDNUMsSUFDRSxNQUFNbUMsUUFBcUJ6RSxJQUMzQnNFLEVBQWlCdkQsRUFBV2tCLGtCQUFrQndDLEdBQzlDRixRQUF3QnZFLEVBQTBCc0UsR0FDbERwQyxFQUF1Q3FDLEdBQ3ZDckMsRUFBb0NzQyxFQVd0QyxDQVZFLE1BQU9QLEdBQ2MsTUFBakJBLEVBQU01RCxhQUFxQ3FFLElBQW5CSixFQUUxQnBDLEVBQ0Usa0VBRXdCLE1BQWpCK0IsRUFBTTVELGFBQXNDcUUsSUFBcEJILEdBQ2pDSSxXQUFXTixFQUFtQixNQUVoQ0gsUUFBUUQsTUFBTUUsTUFBTSxHQUFHRixFQUFNNUQsVUFBVTRELEVBQU1HLGNBQy9DLEdBZ0JGLE1BQU8sQ0FBRVEscUJBZG9CLEtBQzNCLE1BQU1DLEVBQWV4QyxTQUFTQyxjQUFjLGtCQUN0Q3dDLEVBQW1CekMsU0FBU0MsY0FBYyxTQUMxQ2tDLEVBQWVuQyxTQUFTQyxjQUFjLGtCQUM1Q3VDLEVBQWFFLGlCQUFpQixRQUFTaEIsR0FDdkNlLEVBQWlCQyxpQkFBaUIsV0FBWUMsSUFDMUIsVUFBZEEsRUFBTUMsS0FDUmxCLEdBQ0YsSUFFRlMsRUFBYU8saUJBQWlCLFNBQVMsS0FDckM3QyxFQUFvQ3NDLEdBQWVILEdBQW1CLEdBQ3RFLEVBR0wsRUFwRGlCLElDbUJsQixpQkFDRSxJQUNFLE1BQU1sRSxRQUFpQkgsRUFBMEIsUUFDakRrQyxFQUF1Qy9CLEVBUXpDLENBUEUsTUFBTzhELEdBQ1AvQixJQUNBZ0MsUUFBUUQsTUFDTkUsTUFDRSxHQUFHRixFQUFNNUQsVUFBVTRELEVBQU1HLCtGQUcvQixDQUNELENBWkQsR0FhQU4sRUFBVWMsc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL0FQSV9yZXF1ZXN0X21vZHVsZS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL2ZpbHRlcl9kYXRhX21vZHVsZS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL0RPTV9tYW5pcHVsYXRpb25fbW9kdWxlLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvdXNlcl9pbnB1dF9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBBUElSZXF1ZXN0ID0gKCgpID0+IHtcbiAgY29uc3QgQVBJS0VZID0gXCJhMGM5ODM5MzYxZjMwMWFhNGZmOGJiMDg5ZGRlMmQ3OVwiO1xuICBjb25zdCBnZXRDaXR5V2VhdGhlciA9IGFzeW5jIChjaXR5KSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9JHtBUElLRVl9YFxuICAgICk7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICBjb25zdCBwYXJzZWRPYmplY3QgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICByZXR1cm4gcGFyc2VkT2JqZWN0O1xuICAgIH1cbiAgICAvLyBuZXR3b3JrIGVycm9yLCBjaGFuZ2UgRE9NIHRvIGhhdmUgZXJyb3IgbWVzc2FnZVxuICAgIC8vIGFjdHVhbGx5IHRoaXMgbWlnaHQgbWFrZSBtb3JlIHNlbnNlIHRvIGdvIGluIHVzZXJJbnB1dCgpXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlc3BvbnNlKTtcbiAgfTtcbiAgY29uc3QgZ2V0UmFuZG9tQ2l0eSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBDSVRZQ09VTlQgPSA1MDgwNjE7XG4gICAgY29uc3QgcmFuZG9tQ2l0eUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogQ0lUWUNPVU5UKSAtIDE7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJYLVJhcGlkQVBJLUtleVwiOiBcIjgwN2VhMThlYzJtc2gzYTIxNzViMjdjZjA0MWRwMTcwZmVhanNuZjc0NWY1NTM2ZTk0XCIsXG4gICAgICAgIFwiWC1SYXBpZEFQSS1Ib3N0XCI6IFwid2Z0LWdlby1kYi5wLnJhcGlkYXBpLmNvbVwiLFxuICAgICAgfSxcbiAgICB9O1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly93ZnQtZ2VvLWRiLnAucmFwaWRhcGkuY29tL3YxL2dlby9jaXRpZXM/bGltaXQ9MSZpbmNsdWRlRGVsZXRlZD1OT05FJm9mZnNldD0ke3JhbmRvbUNpdHlJbmRleH1gLFxuICAgICAgb3B0aW9uc1xuICAgICk7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICBjb25zdCBwYXJzZWRPYmplY3QgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICByZXR1cm4gcGFyc2VkT2JqZWN0O1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVzcG9uc2UpO1xuICB9O1xuICByZXR1cm4geyBnZXRDaXR5V2VhdGhlciwgZ2V0UmFuZG9tQ2l0eSB9O1xufSkoKTtcblxuZXhwb3J0IHsgQVBJUmVxdWVzdCB9O1xuIiwiY29uc3QgZmlsdGVyRGF0YSA9ICgoKSA9PiB7XG4gIGNvbnN0IGdldFRlbXBlcmF0dXJlID0gKGRhdGEpID0+IGRhdGEubWFpbi50ZW1wO1xuICBjb25zdCBnZXRUZW1wZXJhdHVyZUZhaHJlbmhlaXQgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IGtlbHZpbiA9IGdldFRlbXBlcmF0dXJlKGRhdGEpO1xuICAgIGNvbnN0IGZhaHJlbmhlaXQgPSAoKGtlbHZpbiAtIDI3My4xNSkgKiA5KSAvIDUgKyAzMjtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChmYWhyZW5oZWl0ICogMTAwKSAvIDEwMDtcbiAgfTtcbiAgY29uc3QgZ2V0VGVtcGVyYXR1cmVDZWxzaXVzID0gKGRhdGEpID0+IHtcbiAgICBjb25zdCBrZWx2aW4gPSBnZXRUZW1wZXJhdHVyZShkYXRhKTtcbiAgICBjb25zdCBjZWxzaXVzID0ga2VsdmluIC0gMjczLjE1O1xuICAgIHJldHVybiBNYXRoLnJvdW5kKGNlbHNpdXMgKiAxMDApIC8gMTAwO1xuICB9O1xuICBjb25zdCBnZXRXZWF0aGVyTWFpbiA9IChkYXRhKSA9PiBkYXRhLndlYXRoZXJbMF0ubWFpbjtcbiAgY29uc3QgZ2V0V2VhdGhlckRlc2NyaXB0aW9uID0gKGRhdGEpID0+IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgY29uc3QgZ2V0V2VhdGhlckljb25Db2RlID0gKGRhdGEpID0+IGRhdGEud2VhdGhlclswXS5pY29uO1xuICBjb25zdCBnZXRDaXR5TmFtZSA9IChkYXRhKSA9PiBkYXRhLm5hbWU7XG4gIGNvbnN0IGdldFJhbmRvbUNpdHlOYW1lID0gKGRhdGEpID0+IGRhdGEuZGF0YVswXS5jaXR5O1xuICByZXR1cm4ge1xuICAgIGdldFRlbXBlcmF0dXJlRmFocmVuaGVpdCxcbiAgICBnZXRUZW1wZXJhdHVyZUNlbHNpdXMsXG4gICAgZ2V0V2VhdGhlck1haW4sXG4gICAgZ2V0V2VhdGhlckRlc2NyaXB0aW9uLFxuICAgIGdldFdlYXRoZXJJY29uQ29kZSxcbiAgICBnZXRDaXR5TmFtZSxcbiAgICBnZXRSYW5kb21DaXR5TmFtZSxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGZpbHRlckRhdGEgfTtcbiIsImltcG9ydCB7IGZpbHRlckRhdGEgfSBmcm9tIFwiLi9maWx0ZXJfZGF0YV9tb2R1bGVcIjtcblxuY29uc3QgRE9NTWFuaXB1bGF0aW9uID0gKCgpID0+IHtcbiAgY29uc3QgYWRkV2VhdGhlckljb24gPSAod2VhdGhlckRhdGEpID0+IHtcbiAgICBjb25zdCB3ZWF0aGVySWNvbiA9IGZpbHRlckRhdGEuZ2V0V2VhdGhlckljb25Db2RlKHdlYXRoZXJEYXRhKTtcbiAgICBjb25zdCB3ZWF0aGVySWNvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXItaWNvblwiKTtcbiAgICB3ZWF0aGVySWNvbkVsZW1lbnQuc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7d2VhdGhlckljb259LnBuZ2A7XG4gIH07XG4gIGNvbnN0IGFkZFdlYXRoZXJNYWluID0gKHdlYXRoZXJEYXRhKSA9PiB7XG4gICAgY29uc3Qgd2VhdGhlck1haW4gPSBmaWx0ZXJEYXRhLmdldFdlYXRoZXJNYWluKHdlYXRoZXJEYXRhKTtcbiAgICBjb25zdCB3ZWF0aGVyTWFpbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXItbWFpblwiKTtcbiAgICB3ZWF0aGVyTWFpbkVsZW1lbnQudGV4dENvbnRlbnQgPSB3ZWF0aGVyTWFpbjtcbiAgfTtcbiAgY29uc3QgYWRkV2VhdGhlckRlc2NyaXB0aW9uID0gKHdlYXRoZXJEYXRhKSA9PiB7XG4gICAgY29uc3Qgd2VhdGhlckRlc2NyaXB0aW9uID0gZmlsdGVyRGF0YS5nZXRXZWF0aGVyRGVzY3JpcHRpb24od2VhdGhlckRhdGEpO1xuICAgIGNvbnN0IHdlYXRoZXJEZXNjcmlwdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIud2VhdGhlci1kZXNjcmlwdGlvblwiXG4gICAgKTtcbiAgICB3ZWF0aGVyRGVzY3JpcHRpb25FbGVtZW50LnRleHRDb250ZW50ID0gd2VhdGhlckRlc2NyaXB0aW9uO1xuICB9O1xuICBjb25zdCBhZGRUZW1wZXJhdHVyZUZhaHJlbmhlaXQgPSAod2VhdGhlckRhdGEpID0+IHtcbiAgICBjb25zdCB0ZW1wRiA9IGZpbHRlckRhdGEuZ2V0VGVtcGVyYXR1cmVGYWhyZW5oZWl0KHdlYXRoZXJEYXRhKTtcbiAgICBjb25zdCB0ZW1wRkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXAtZlwiKTtcbiAgICB0ZW1wRkVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHt0ZW1wRn3CsEZgO1xuICB9O1xuICBjb25zdCBhZGRUZW1wZXJhdHVyZUNlbHNpdXMgPSAod2VhdGhlckRhdGEpID0+IHtcbiAgICBjb25zdCB0ZW1wQyA9IGZpbHRlckRhdGEuZ2V0VGVtcGVyYXR1cmVDZWxzaXVzKHdlYXRoZXJEYXRhKTtcbiAgICBjb25zdCB0ZW1wQ0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXAtY1wiKTtcbiAgICB0ZW1wQ0VsZW1lbnQudGV4dENvbnRlbnQgPSBgJHt0ZW1wQ33CsENgO1xuICB9O1xuICBjb25zdCBhZGRDaXR5TmFtZSA9ICh3ZWF0aGVyRGF0YSkgPT4ge1xuICAgIGNvbnN0IGNpdHlOYW1lID0gZmlsdGVyRGF0YS5nZXRDaXR5TmFtZSh3ZWF0aGVyRGF0YSk7XG4gICAgY29uc3QgY2l0eU5hbWVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXR5LW5hbWVcIik7XG4gICAgY2l0eU5hbWVFbGVtZW50LnRleHRDb250ZW50ID0gY2l0eU5hbWU7XG4gIH07XG4gIGNvbnN0IHJlc2V0SW5wdXRWYWx1ZSA9ICgpID0+IHtcbiAgICBjb25zdCBjaXR5SW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaXR5XCIpO1xuICAgIGNpdHlJbnB1dEVsZW1lbnQudmFsdWUgPSBcIlwiO1xuICB9O1xuICBjb25zdCBhZGRQbGFjZWhvbGRlclZhbHVlcyA9ICgpID0+IHtcbiAgICBjb25zdCB3ZWF0aGVySWNvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXItaWNvblwiKTtcbiAgICBjb25zdCB3ZWF0aGVyTWFpbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXItbWFpblwiKTtcbiAgICBjb25zdCB3ZWF0aGVyRGVzY3JpcHRpb25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLndlYXRoZXItZGVzY3JpcHRpb25cIlxuICAgICk7XG4gICAgY29uc3QgdGVtcEZFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wLWZcIik7XG4gICAgY29uc3QgdGVtcENFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wLWNcIik7XG4gICAgY29uc3QgY2l0eU5hbWVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXR5LW5hbWVcIik7XG4gICAgd2VhdGhlckljb25FbGVtZW50LnNyYyA9IFwiLi4vZGlzdC9taWNrZXkucG5nXCI7XG4gICAgd2VhdGhlck1haW5FbGVtZW50LnRleHRDb250ZW50ID0gXCJUaGUgc3VuIG1pZ2h0IG9yIG1pZ2h0IG5vdCBiZSB2aXNpYmxlXCI7XG4gICAgd2VhdGhlckRlc2NyaXB0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IFwiaG9wZWZ1bGx5IHRoZSBza3kgaXMgc3RpbGwgYmx1ZVwiO1xuICAgIHRlbXBGRWxlbWVudC50ZXh0Q29udGVudCA9IFwiTGFyZ2VyIG51bWJlcsKwRlwiO1xuICAgIHRlbXBDRWxlbWVudC50ZXh0Q29udGVudCA9IFwiU21hbGxlciBudW1iZXLCsENcIjtcbiAgICBjaXR5TmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSBcIkRpc25leWxhbmRcIjtcbiAgfTtcbiAgY29uc3QgY2hhbmdlRXJyb3JNZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2VFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lcnJvci1tZXNzYWdlXCIpO1xuICAgIGVycm9yTWVzc2FnZUVsZW1lbnQudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuICB9O1xuICBjb25zdCB0b2dnbGVCdXR0b25FbmFibGVkID0gKGJ1dHRvbikgPT4ge1xuICAgIGlmIChidXR0b24uZGlzYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICBidXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBidXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHVwZGF0ZURpc3BsYXllZFdlYXRoZXIgPSAod2VhdGhlckRhdGEpID0+IHtcbiAgICBhZGRXZWF0aGVySWNvbih3ZWF0aGVyRGF0YSk7XG4gICAgYWRkV2VhdGhlck1haW4od2VhdGhlckRhdGEpO1xuICAgIGFkZFdlYXRoZXJEZXNjcmlwdGlvbih3ZWF0aGVyRGF0YSk7XG4gICAgYWRkVGVtcGVyYXR1cmVGYWhyZW5oZWl0KHdlYXRoZXJEYXRhKTtcbiAgICBhZGRUZW1wZXJhdHVyZUNlbHNpdXMod2VhdGhlckRhdGEpO1xuICAgIGFkZENpdHlOYW1lKHdlYXRoZXJEYXRhKTtcbiAgICByZXNldElucHV0VmFsdWUoKTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGVEaXNwbGF5ZWRXZWF0aGVyLFxuICAgIGFkZFBsYWNlaG9sZGVyVmFsdWVzLFxuICAgIGNoYW5nZUVycm9yTWVzc2FnZSxcbiAgICB0b2dnbGVCdXR0b25FbmFibGVkLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IHsgRE9NTWFuaXB1bGF0aW9uIH07XG4iLCJpbXBvcnQgeyBBUElSZXF1ZXN0IH0gZnJvbSBcIi4vQVBJX3JlcXVlc3RfbW9kdWxlXCI7XG5pbXBvcnQgeyBmaWx0ZXJEYXRhIH0gZnJvbSBcIi4vZmlsdGVyX2RhdGFfbW9kdWxlXCI7XG5pbXBvcnQgeyBET01NYW5pcHVsYXRpb24gfSBmcm9tIFwiLi9ET01fbWFuaXB1bGF0aW9uX21vZHVsZVwiO1xuXG5jb25zdCB1c2VySW5wdXQgPSAoKCkgPT4ge1xuICBjb25zdCBzdWJtaXRVc2VySW5wdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgY2l0eUlucHV0VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NpdHlcIikudmFsdWU7XG4gICAgaWYgKGNpdHlJbnB1dFZhbHVlICE9PSBcIlwiKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEFQSVJlcXVlc3QuZ2V0Q2l0eVdlYXRoZXIoY2l0eUlucHV0VmFsdWUpO1xuICAgICAgICBET01NYW5pcHVsYXRpb24udXBkYXRlRGlzcGxheWVkV2VhdGhlcihyZXNwb25zZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBET01NYW5pcHVsYXRpb24uY2hhbmdlRXJyb3JNZXNzYWdlKFxuICAgICAgICAgIFwiVWggb2gsIGxvb2tzIGxpa2Ugc29tZXRoaW5nIHdlbnQgd3JvbmchIENoZWNrIHlvdXIgc3BlbGxpbmcgdGhlbiB0cnkgYWdhaW4hXCJcbiAgICAgICAgKTtcbiAgICAgICAgY29uc29sZS5lcnJvcihFcnJvcihlcnJvci5zdGF0dXNUZXh0KSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBjb25zdCBzdWJtaXRSYW5kb21JbnB1dCA9IGFzeW5jICgpID0+IHtcbiAgICBsZXQgcmFuZG9tQ2l0eU5hbWU7XG4gICAgbGV0IHdlYXRoZXJSZXNwb25zZTtcbiAgICBjb25zdCByYW5kb21CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJhbmRvbS1idXR0b25cIik7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNpdHlSZXNwb25zZSA9IGF3YWl0IEFQSVJlcXVlc3QuZ2V0UmFuZG9tQ2l0eSgpO1xuICAgICAgcmFuZG9tQ2l0eU5hbWUgPSBmaWx0ZXJEYXRhLmdldFJhbmRvbUNpdHlOYW1lKGNpdHlSZXNwb25zZSk7XG4gICAgICB3ZWF0aGVyUmVzcG9uc2UgPSBhd2FpdCBBUElSZXF1ZXN0LmdldENpdHlXZWF0aGVyKHJhbmRvbUNpdHlOYW1lKTtcbiAgICAgIERPTU1hbmlwdWxhdGlvbi51cGRhdGVEaXNwbGF5ZWRXZWF0aGVyKHdlYXRoZXJSZXNwb25zZSk7XG4gICAgICBET01NYW5pcHVsYXRpb24udG9nZ2xlQnV0dG9uRW5hYmxlZChyYW5kb21CdXR0b24pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MDQgJiYgcmFuZG9tQ2l0eU5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBHZW9EQiBBUEkgZXJyb3JcbiAgICAgICAgRE9NTWFuaXB1bGF0aW9uLmNoYW5nZUVycm9yTWVzc2FnZShcbiAgICAgICAgICBcIkhtbSwgaXQgc2VlbXMgbGlrZSB3ZSdyZSBydW5uaW5nIGludG8gc29tZSB0cm91YmxlLiBUcnkgYWdhaW4hXCJcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MDQgJiYgd2VhdGhlclJlc3BvbnNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc2V0VGltZW91dChzdWJtaXRSYW5kb21JbnB1dCwgMTUwMCk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmVycm9yKEVycm9yKGAke2Vycm9yLnN0YXR1c30gJHtlcnJvci5zdGF0dXNUZXh0fWApKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGFkZFVzZXJJbnB1dExpc3RlbmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VhcmNoLWJ1dHRvblwiKTtcbiAgICBjb25zdCBjaXR5SW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaXR5XCIpO1xuICAgIGNvbnN0IHJhbmRvbUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmFuZG9tLWJ1dHRvblwiKTtcbiAgICBzZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN1Ym1pdFVzZXJJbnB1dCk7XG4gICAgY2l0eUlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICBzdWJtaXRVc2VySW5wdXQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByYW5kb21CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIERPTU1hbmlwdWxhdGlvbi50b2dnbGVCdXR0b25FbmFibGVkKHJhbmRvbUJ1dHRvbiksIHN1Ym1pdFJhbmRvbUlucHV0KCk7XG4gICAgfSk7XG4gIH07XG4gIHJldHVybiB7IGFkZFVzZXJJbnB1dExpc3RlbmVyIH07XG59KSgpO1xuXG5leHBvcnQgeyB1c2VySW5wdXQgfTtcbiIsImltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tIFwiLi9BUElfcmVxdWVzdF9tb2R1bGVcIjtcbmltcG9ydCB7IGZpbHRlckRhdGEgfSBmcm9tIFwiLi9maWx0ZXJfZGF0YV9tb2R1bGVcIjtcbmltcG9ydCB7IHVzZXJJbnB1dCB9IGZyb20gXCIuL3VzZXJfaW5wdXRfbW9kdWxlXCI7XG5pbXBvcnQgeyBET01NYW5pcHVsYXRpb24gfSBmcm9tIFwiLi9ET01fbWFuaXB1bGF0aW9uX21vZHVsZVwiO1xuXG4vLyBBUElSZXF1ZXN0LmdldENpdHlXZWF0aGVyKFwiU2FuIEZyYW5jaXNjb1wiKVxuLy8gICAudGhlbigocmVzcG9uc2UpID0+IHtcbi8vICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4vLyAgICAgY29uc29sZS5sb2cocmVzcG9uc2Uud2VhdGhlclswXS5pY29uKTtcbi8vICAgICBjb25zdCBpY29uID0gZmlsdGVyRGF0YS5nZXRXZWF0aGVySWNvbkNvZGUocmVzcG9uc2UpO1xuLy8gICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4vLyAgICAgaW1nLnNyYyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2ljb259LnBuZ2A7XG4vLyAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpdlwiKTtcbi8vICAgICBkaXYuYXBwZW5kQ2hpbGQoaW1nKTtcbi8vICAgICBjb25zb2xlLmxvZyhmaWx0ZXJEYXRhLmdldFdlYXRoZXJNYWluKHJlc3BvbnNlKSk7XG4vLyAgICAgY29uc29sZS5sb2coZmlsdGVyRGF0YS5nZXRXZWF0aGVyRGVzY3JpcHRpb24ocmVzcG9uc2UpKTtcbi8vICAgICBjb25zb2xlLmxvZyhmaWx0ZXJEYXRhLmdldFRlbXBlcmF0dXJlKHJlc3BvbnNlKSk7XG4vLyAgICAgY29uc29sZS5sb2coZmlsdGVyRGF0YS5nZXRUZW1wZXJhdHVyZUZhaHJlbmhlaXQocmVzcG9uc2UpKTtcbi8vICAgICBjb25zb2xlLmxvZyhmaWx0ZXJEYXRhLmdldFRlbXBlcmF0dXJlQ2Vsc2l1cyhyZXNwb25zZSkpO1xuLy8gICB9KVxuLy8gICAudGhlbigocmVzcG9uc2UpID0+IHtcbi8vICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4vLyAgIH0pO1xuKGFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemVQYWdlKCkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQVBJUmVxdWVzdC5nZXRDaXR5V2VhdGhlcihcIkhlbGxcIik7XG4gICAgRE9NTWFuaXB1bGF0aW9uLnVwZGF0ZURpc3BsYXllZFdlYXRoZXIocmVzcG9uc2UpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIERPTU1hbmlwdWxhdGlvbi5hZGRQbGFjZWhvbGRlclZhbHVlcygpO1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBFcnJvcihcbiAgICAgICAgYCR7ZXJyb3Iuc3RhdHVzfSAke2Vycm9yLnN0YXR1c1RleHR9LiBJZiB5b3UgY2FuIHNlZSB0aGlzLCB0aGF0IG1lYW5zIHRoZXJlIHdhcyBhbiBpc3N1ZSB3aXRoIHRoZSBPcGVuV2VhdGhlck1hcCBBUEkhYFxuICAgICAgKVxuICAgICk7XG4gIH1cbn0pKCk7XG51c2VySW5wdXQuYWRkVXNlcklucHV0TGlzdGVuZXIoKTtcbiJdLCJuYW1lcyI6WyJBUElSZXF1ZXN0IiwiYXN5bmMiLCJjaXR5IiwicmVzcG9uc2UiLCJmZXRjaCIsInN0YXR1cyIsImpzb24iLCJQcm9taXNlIiwicmVqZWN0IiwicmFuZG9tQ2l0eUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibWV0aG9kIiwiaGVhZGVycyIsImZpbHRlckRhdGEiLCJnZXRUZW1wZXJhdHVyZSIsImRhdGEiLCJtYWluIiwidGVtcCIsImdldFRlbXBlcmF0dXJlRmFocmVuaGVpdCIsImZhaHJlbmhlaXQiLCJyb3VuZCIsImdldFRlbXBlcmF0dXJlQ2Vsc2l1cyIsImNlbHNpdXMiLCJnZXRXZWF0aGVyTWFpbiIsIndlYXRoZXIiLCJnZXRXZWF0aGVyRGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsImdldFdlYXRoZXJJY29uQ29kZSIsImljb24iLCJnZXRDaXR5TmFtZSIsIm5hbWUiLCJnZXRSYW5kb21DaXR5TmFtZSIsIkRPTU1hbmlwdWxhdGlvbiIsIndlYXRoZXJEYXRhIiwid2VhdGhlckljb24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzcmMiLCJhZGRXZWF0aGVySWNvbiIsIndlYXRoZXJNYWluIiwidGV4dENvbnRlbnQiLCJhZGRXZWF0aGVyTWFpbiIsIndlYXRoZXJEZXNjcmlwdGlvbiIsImFkZFdlYXRoZXJEZXNjcmlwdGlvbiIsInRlbXBGIiwiYWRkVGVtcGVyYXR1cmVGYWhyZW5oZWl0IiwidGVtcEMiLCJhZGRUZW1wZXJhdHVyZUNlbHNpdXMiLCJjaXR5TmFtZSIsImFkZENpdHlOYW1lIiwidmFsdWUiLCJ3ZWF0aGVySWNvbkVsZW1lbnQiLCJ3ZWF0aGVyTWFpbkVsZW1lbnQiLCJ3ZWF0aGVyRGVzY3JpcHRpb25FbGVtZW50IiwidGVtcEZFbGVtZW50IiwidGVtcENFbGVtZW50IiwiY2l0eU5hbWVFbGVtZW50IiwibWVzc2FnZSIsImJ1dHRvbiIsImRpc2FibGVkIiwidXNlcklucHV0Iiwic3VibWl0VXNlcklucHV0IiwiY2l0eUlucHV0VmFsdWUiLCJlcnJvciIsImNvbnNvbGUiLCJFcnJvciIsInN0YXR1c1RleHQiLCJzdWJtaXRSYW5kb21JbnB1dCIsInJhbmRvbUNpdHlOYW1lIiwid2VhdGhlclJlc3BvbnNlIiwicmFuZG9tQnV0dG9uIiwiY2l0eVJlc3BvbnNlIiwidW5kZWZpbmVkIiwic2V0VGltZW91dCIsImFkZFVzZXJJbnB1dExpc3RlbmVyIiwic2VhcmNoQnV0dG9uIiwiY2l0eUlucHV0RWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImtleSJdLCJzb3VyY2VSb290IjoiIn0=