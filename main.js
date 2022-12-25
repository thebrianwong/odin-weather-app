(()=>{"use strict";const e=async e=>{const t=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=a0c9839361f301aa4ff8bb089dde2d79`);return 200===t.status?await t.json():Promise.reject(t)},t=async()=>{const e=Math.floor(508061*Math.random())-1,t=await fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=1&includeDeleted=NONE&offset=${e}`,{method:"GET",headers:{"X-RapidAPI-Key":"807ea18ec2msh3a2175b27cf041dp170feajsnf745f5536e94","X-RapidAPI-Host":"wft-geo-db.p.rapidapi.com"}});return 200===t.status?await t.json():Promise.reject(t)},r=(()=>{const e=e=>e.main.temp;return{getTemperatureFahrenheit:t=>{const r=9*(e(t)-273.15)/5+32;return Math.round(100*r)/100},getTemperatureCelsius:t=>{const r=e(t)-273.15;return Math.round(100*r)/100},getWeatherMain:e=>e.weather[0].main,getWeatherDescription:e=>e.weather[0].description,getWeatherIconCode:e=>e.weather[0].icon,getCityName:e=>e.name,getRandomCityName:e=>e.data[0].city}})(),o=(()=>{let e=!1;const t=e=>{e.classList.toggle("not-displayed")},o=async e=>{document.querySelector(".loading-message").textContent=e},a=e=>new Promise((t=>setTimeout(t,e))),n=async()=>{for(e=!e;e;)await a(1e3),o("Loading."),await a(1e3),o("Loading.."),await a(1e3),o("Loading...")};return{updateDisplayedWeather:e=>{(e=>{const t=r.getWeatherIconCode(e);document.querySelector(".weather-icon").src=`http://openweathermap.org/img/wn/${t}.png`})(e),(e=>{const t=r.getWeatherMain(e);document.querySelector(".weather-main").textContent=t})(e),(e=>{const t=r.getWeatherDescription(e);document.querySelector(".weather-description").textContent=t})(e),(e=>{const t=r.getTemperatureFahrenheit(e);document.querySelector(".temp-f").textContent=`${t}°F`})(e),(e=>{const t=r.getTemperatureCelsius(e);document.querySelector(".temp-c").textContent=`${t}°C`})(e),(e=>{const t=r.getCityName(e);document.querySelector(".city-name").textContent=t})(e),document.querySelector("#city").value=""},addPlaceholderValues:()=>{const e=document.querySelector(".weather-icon"),t=document.querySelector(".weather-main"),r=document.querySelector(".weather-description"),o=document.querySelector(".temp-f"),a=document.querySelector(".temp-c"),n=document.querySelector(".city-name");e.src="../dist/mickey.png",t.textContent="The sun might or might not be visible",r.textContent="hopefully the sky is still blue",o.textContent="Larger number°F",a.textContent="Smaller number°C",n.textContent="Disneyland"},changeErrorMessage:e=>{document.querySelector(".error-message").textContent=e},toggleElementDisplay:t,toggleLoadingInProgress:()=>{const e=document.querySelector("#loading-indicator");Array.from(document.querySelectorAll(".submission-element")).forEach((e=>{!1===e.disabled?e.disabled=!0:e.disabled=!1})),t(e),n()},toggleLoadingMessageCycle:n}})(),a=(()=>{const a=async()=>{const t=document.querySelector("#city").value;if(""!==t)try{const r=await e(t);o.updateDisplayedWeather(r)}catch(e){404===e.status?o.changeErrorMessage("Uh oh, looks like something went wrong! Check your spelling or try a different city!"):429===e.status?o.changeErrorMessage("Whoa, slow down there partner! Save some weather data for the rest of us!"):500===e.status&&o.changeErrorMessage("Something out of our control is broken. Try again later!"),console.error(Error(e.statusText))}o.toggleLoadingInProgress()},n=async()=>{let a,s;try{const n=await t();a=r.getRandomCityName(n),s=await e(a),o.updateDisplayedWeather(s),o.toggleLoadingInProgress()}catch(e){404===e.status&&void 0===a?o.changeErrorMessage("Hmm, it seems like we're running into some trouble. Try again!"):404===e.status&&void 0===s||429===e.status?setTimeout(n,1500):500===e.status&&o.changeErrorMessage("Something out of our control is broken. Try again later!"),console.error(Error(`${e.status} ${e.statusText}`))}};return{addUserInputListeners:()=>{document.querySelector(".search-button").addEventListener("click",(()=>{o.toggleLoadingInProgress(),a()})),document.querySelector("#city").addEventListener("keydown",(e=>{"Enter"===e.key&&(o.toggleLoadingInProgress(),a())})),document.querySelector(".random-button").addEventListener("click",(()=>{o.toggleLoadingInProgress(),n()})),(()=>{const e=Array.from(document.querySelectorAll(".temp-button"));e.forEach((t=>{t.addEventListener("click",(()=>{e.forEach((e=>{o.toggleElementDisplay(e)}))}))}))})()}}})();!async function(){try{const t=await e("Hell");o.updateDisplayedWeather(t)}catch(e){o.addPlaceholderValues(),console.error(Error(`${e.status} ${e.statusText}. If you can see this, that means there was an issue with the OpenWeatherMap API!`))}}(),a.addUserInputListeners()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SCxFQUEwQixRQUNqRGtDLEVBQWdCZSx1QkFBdUI5QyxFQVF6QyxDQVBFLE1BQU9nRixHQUNQakQsRUFBZ0IrQix1QkFDaEJtQixRQUFRRCxNQUNORSxNQUNFLEdBQUdGLEVBQU05RSxVQUFVOEUsRUFBTUcsK0ZBRy9CLENBQ0QsQ0FaRCxHQWFBTixFQUFVWSx1QiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvQVBJX3JlcXVlc3RfbW9kdWxlLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvZmlsdGVyX2RhdGFfbW9kdWxlLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvRE9NX21hbmlwdWxhdGlvbl9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy91c2VyX2lucHV0X21vZHVsZS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFQSVJlcXVlc3QgPSAoKCkgPT4ge1xuICBjb25zdCBBUElLRVkgPSBcImEwYzk4MzkzNjFmMzAxYWE0ZmY4YmIwODlkZGUyZDc5XCI7XG4gIGNvbnN0IGdldENpdHlXZWF0aGVyID0gYXN5bmMgKGNpdHkpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZhcHBpZD0ke0FQSUtFWX1gXG4gICAgKTtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgIGNvbnN0IHBhcnNlZE9iamVjdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHJldHVybiBwYXJzZWRPYmplY3Q7XG4gICAgfVxuICAgIC8vIG5ldHdvcmsgZXJyb3IsIGNoYW5nZSBET00gdG8gaGF2ZSBlcnJvciBtZXNzYWdlXG4gICAgLy8gYWN0dWFsbHkgdGhpcyBtaWdodCBtYWtlIG1vcmUgc2Vuc2UgdG8gZ28gaW4gdXNlcklucHV0KClcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVzcG9uc2UpO1xuICB9O1xuICBjb25zdCBnZXRSYW5kb21DaXR5ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IENJVFlDT1VOVCA9IDUwODA2MTtcbiAgICBjb25zdCByYW5kb21DaXR5SW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBDSVRZQ09VTlQpIC0gMTtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIlgtUmFwaWRBUEktS2V5XCI6IFwiODA3ZWExOGVjMm1zaDNhMjE3NWIyN2NmMDQxZHAxNzBmZWFqc25mNzQ1ZjU1MzZlOTRcIixcbiAgICAgICAgXCJYLVJhcGlkQVBJLUhvc3RcIjogXCJ3ZnQtZ2VvLWRiLnAucmFwaWRhcGkuY29tXCIsXG4gICAgICB9LFxuICAgIH07XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL3dmdC1nZW8tZGIucC5yYXBpZGFwaS5jb20vdjEvZ2VvL2NpdGllcz9saW1pdD0xJmluY2x1ZGVEZWxldGVkPU5PTkUmb2Zmc2V0PSR7cmFuZG9tQ2l0eUluZGV4fWAsXG4gICAgICBvcHRpb25zXG4gICAgKTtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgIGNvbnN0IHBhcnNlZE9iamVjdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHJldHVybiBwYXJzZWRPYmplY3Q7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZXNwb25zZSk7XG4gIH07XG4gIHJldHVybiB7IGdldENpdHlXZWF0aGVyLCBnZXRSYW5kb21DaXR5IH07XG59KSgpO1xuXG5leHBvcnQgeyBBUElSZXF1ZXN0IH07XG4iLCJjb25zdCBmaWx0ZXJEYXRhID0gKCgpID0+IHtcbiAgY29uc3QgZ2V0VGVtcGVyYXR1cmUgPSAoZGF0YSkgPT4gZGF0YS5tYWluLnRlbXA7XG4gIGNvbnN0IGdldFRlbXBlcmF0dXJlRmFocmVuaGVpdCA9IChkYXRhKSA9PiB7XG4gICAgY29uc3Qga2VsdmluID0gZ2V0VGVtcGVyYXR1cmUoZGF0YSk7XG4gICAgY29uc3QgZmFocmVuaGVpdCA9ICgoa2VsdmluIC0gMjczLjE1KSAqIDkpIC8gNSArIDMyO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKGZhaHJlbmhlaXQgKiAxMDApIC8gMTAwO1xuICB9O1xuICBjb25zdCBnZXRUZW1wZXJhdHVyZUNlbHNpdXMgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IGtlbHZpbiA9IGdldFRlbXBlcmF0dXJlKGRhdGEpO1xuICAgIGNvbnN0IGNlbHNpdXMgPSBrZWx2aW4gLSAyNzMuMTU7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoY2Vsc2l1cyAqIDEwMCkgLyAxMDA7XG4gIH07XG4gIGNvbnN0IGdldFdlYXRoZXJNYWluID0gKGRhdGEpID0+IGRhdGEud2VhdGhlclswXS5tYWluO1xuICBjb25zdCBnZXRXZWF0aGVyRGVzY3JpcHRpb24gPSAoZGF0YSkgPT4gZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICBjb25zdCBnZXRXZWF0aGVySWNvbkNvZGUgPSAoZGF0YSkgPT4gZGF0YS53ZWF0aGVyWzBdLmljb247XG4gIGNvbnN0IGdldENpdHlOYW1lID0gKGRhdGEpID0+IGRhdGEubmFtZTtcbiAgY29uc3QgZ2V0UmFuZG9tQ2l0eU5hbWUgPSAoZGF0YSkgPT4gZGF0YS5kYXRhWzBdLmNpdHk7XG4gIHJldHVybiB7XG4gICAgZ2V0VGVtcGVyYXR1cmVGYWhyZW5oZWl0LFxuICAgIGdldFRlbXBlcmF0dXJlQ2Vsc2l1cyxcbiAgICBnZXRXZWF0aGVyTWFpbixcbiAgICBnZXRXZWF0aGVyRGVzY3JpcHRpb24sXG4gICAgZ2V0V2VhdGhlckljb25Db2RlLFxuICAgIGdldENpdHlOYW1lLFxuICAgIGdldFJhbmRvbUNpdHlOYW1lLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IHsgZmlsdGVyRGF0YSB9O1xuIiwiaW1wb3J0IHsgZmlsdGVyRGF0YSB9IGZyb20gXCIuL2ZpbHRlcl9kYXRhX21vZHVsZVwiO1xuXG5jb25zdCBET01NYW5pcHVsYXRpb24gPSAoKCkgPT4ge1xuICBsZXQgdGltZXIgPSBmYWxzZTtcbiAgY29uc3QgYWRkV2VhdGhlckljb24gPSAod2VhdGhlckRhdGEpID0+IHtcbiAgICBjb25zdCB3ZWF0aGVySWNvbiA9IGZpbHRlckRhdGEuZ2V0V2VhdGhlckljb25Db2RlKHdlYXRoZXJEYXRhKTtcbiAgICBjb25zdCB3ZWF0aGVySWNvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXItaWNvblwiKTtcbiAgICB3ZWF0aGVySWNvbkVsZW1lbnQuc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7d2VhdGhlckljb259LnBuZ2A7XG4gIH07XG4gIGNvbnN0IGFkZFdlYXRoZXJNYWluID0gKHdlYXRoZXJEYXRhKSA9PiB7XG4gICAgY29uc3Qgd2VhdGhlck1haW4gPSBmaWx0ZXJEYXRhLmdldFdlYXRoZXJNYWluKHdlYXRoZXJEYXRhKTtcbiAgICBjb25zdCB3ZWF0aGVyTWFpbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXItbWFpblwiKTtcbiAgICB3ZWF0aGVyTWFpbkVsZW1lbnQudGV4dENvbnRlbnQgPSB3ZWF0aGVyTWFpbjtcbiAgfTtcbiAgY29uc3QgYWRkV2VhdGhlckRlc2NyaXB0aW9uID0gKHdlYXRoZXJEYXRhKSA9PiB7XG4gICAgY29uc3Qgd2VhdGhlckRlc2NyaXB0aW9uID0gZmlsdGVyRGF0YS5nZXRXZWF0aGVyRGVzY3JpcHRpb24od2VhdGhlckRhdGEpO1xuICAgIGNvbnN0IHdlYXRoZXJEZXNjcmlwdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIud2VhdGhlci1kZXNjcmlwdGlvblwiXG4gICAgKTtcbiAgICB3ZWF0aGVyRGVzY3JpcHRpb25FbGVtZW50LnRleHRDb250ZW50ID0gd2VhdGhlckRlc2NyaXB0aW9uO1xuICB9O1xuICBjb25zdCBhZGRUZW1wZXJhdHVyZUZhaHJlbmhlaXQgPSAod2VhdGhlckRhdGEpID0+IHtcbiAgICBjb25zdCB0ZW1wRiA9IGZpbHRlckRhdGEuZ2V0VGVtcGVyYXR1cmVGYWhyZW5oZWl0KHdlYXRoZXJEYXRhKTtcbiAgICBjb25zdCB0ZW1wRkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXAtZlwiKTtcbiAgICB0ZW1wRkVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHt0ZW1wRn3CsEZgO1xuICB9O1xuICBjb25zdCBhZGRUZW1wZXJhdHVyZUNlbHNpdXMgPSAod2VhdGhlckRhdGEpID0+IHtcbiAgICBjb25zdCB0ZW1wQyA9IGZpbHRlckRhdGEuZ2V0VGVtcGVyYXR1cmVDZWxzaXVzKHdlYXRoZXJEYXRhKTtcbiAgICBjb25zdCB0ZW1wQ0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlbXAtY1wiKTtcbiAgICB0ZW1wQ0VsZW1lbnQudGV4dENvbnRlbnQgPSBgJHt0ZW1wQ33CsENgO1xuICB9O1xuICBjb25zdCBhZGRDaXR5TmFtZSA9ICh3ZWF0aGVyRGF0YSkgPT4ge1xuICAgIGNvbnN0IGNpdHlOYW1lID0gZmlsdGVyRGF0YS5nZXRDaXR5TmFtZSh3ZWF0aGVyRGF0YSk7XG4gICAgY29uc3QgY2l0eU5hbWVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXR5LW5hbWVcIik7XG4gICAgY2l0eU5hbWVFbGVtZW50LnRleHRDb250ZW50ID0gY2l0eU5hbWU7XG4gIH07XG4gIGNvbnN0IHJlc2V0SW5wdXRWYWx1ZSA9ICgpID0+IHtcbiAgICBjb25zdCBjaXR5SW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaXR5XCIpO1xuICAgIGNpdHlJbnB1dEVsZW1lbnQudmFsdWUgPSBcIlwiO1xuICB9O1xuICBjb25zdCBhZGRQbGFjZWhvbGRlclZhbHVlcyA9ICgpID0+IHtcbiAgICBjb25zdCB3ZWF0aGVySWNvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXItaWNvblwiKTtcbiAgICBjb25zdCB3ZWF0aGVyTWFpbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXItbWFpblwiKTtcbiAgICBjb25zdCB3ZWF0aGVyRGVzY3JpcHRpb25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLndlYXRoZXItZGVzY3JpcHRpb25cIlxuICAgICk7XG4gICAgY29uc3QgdGVtcEZFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wLWZcIik7XG4gICAgY29uc3QgdGVtcENFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wLWNcIik7XG4gICAgY29uc3QgY2l0eU5hbWVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXR5LW5hbWVcIik7XG4gICAgd2VhdGhlckljb25FbGVtZW50LnNyYyA9IFwiLi4vZGlzdC9taWNrZXkucG5nXCI7XG4gICAgd2VhdGhlck1haW5FbGVtZW50LnRleHRDb250ZW50ID0gXCJUaGUgc3VuIG1pZ2h0IG9yIG1pZ2h0IG5vdCBiZSB2aXNpYmxlXCI7XG4gICAgd2VhdGhlckRlc2NyaXB0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IFwiaG9wZWZ1bGx5IHRoZSBza3kgaXMgc3RpbGwgYmx1ZVwiO1xuICAgIHRlbXBGRWxlbWVudC50ZXh0Q29udGVudCA9IFwiTGFyZ2VyIG51bWJlcsKwRlwiO1xuICAgIHRlbXBDRWxlbWVudC50ZXh0Q29udGVudCA9IFwiU21hbGxlciBudW1iZXLCsENcIjtcbiAgICBjaXR5TmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSBcIkRpc25leWxhbmRcIjtcbiAgfTtcbiAgY29uc3QgY2hhbmdlRXJyb3JNZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2VFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lcnJvci1tZXNzYWdlXCIpO1xuICAgIGVycm9yTWVzc2FnZUVsZW1lbnQudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuICB9O1xuICBjb25zdCB0b2dnbGVTdWJtaXNzaW9uRWxlbWVudHNFbmFibGVkID0gKCkgPT4ge1xuICAgIGNvbnN0IHN1Ym1pc3Npb25FbGVtZW50cyA9IEFycmF5LmZyb20oXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnN1Ym1pc3Npb24tZWxlbWVudFwiKVxuICAgICk7XG4gICAgc3VibWlzc2lvbkVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChlbGVtZW50LmRpc2FibGVkID09PSBmYWxzZSkge1xuICAgICAgICBlbGVtZW50LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgdG9nZ2xlRWxlbWVudERpc3BsYXkgPSAoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcIm5vdC1kaXNwbGF5ZWRcIik7XG4gIH07XG4gIGNvbnN0IGNoYW5nZUxvYWRpbmdNZXNzYWdlID0gYXN5bmMgKG1lc3NhZ2UpID0+IHtcbiAgICBjb25zdCBsb2FkaW5nTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9hZGluZy1tZXNzYWdlXCIpO1xuICAgIGxvYWRpbmdNZXNzYWdlLnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgfTtcbiAgY29uc3Qgd2FpdFRpbWVyID0gKGR1cmF0aW9uKSA9PlxuICAgIG5ldyBQcm9taXNlKChyZXNwb25zZSkgPT4gc2V0VGltZW91dChyZXNwb25zZSwgZHVyYXRpb24pKTtcbiAgY29uc3QgdG9nZ2xlTG9hZGluZ01lc3NhZ2VDeWNsZSA9IGFzeW5jICgpID0+IHtcbiAgICB0aW1lciA/ICh0aW1lciA9IGZhbHNlKSA6ICh0aW1lciA9IHRydWUpO1xuICAgIHdoaWxlICh0aW1lcikge1xuICAgICAgYXdhaXQgd2FpdFRpbWVyKDEwMDApO1xuICAgICAgY2hhbmdlTG9hZGluZ01lc3NhZ2UoXCJMb2FkaW5nLlwiKTtcbiAgICAgIGF3YWl0IHdhaXRUaW1lcigxMDAwKTtcbiAgICAgIGNoYW5nZUxvYWRpbmdNZXNzYWdlKFwiTG9hZGluZy4uXCIpO1xuICAgICAgYXdhaXQgd2FpdFRpbWVyKDEwMDApO1xuICAgICAgY2hhbmdlTG9hZGluZ01lc3NhZ2UoXCJMb2FkaW5nLi4uXCIpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgdG9nZ2xlTG9hZGluZ0luUHJvZ3Jlc3MgPSAoKSA9PiB7XG4gICAgY29uc3QgbG9hZGluZ0luZGljYXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9hZGluZy1pbmRpY2F0b3JcIik7XG4gICAgdG9nZ2xlU3VibWlzc2lvbkVsZW1lbnRzRW5hYmxlZCgpO1xuICAgIHRvZ2dsZUVsZW1lbnREaXNwbGF5KGxvYWRpbmdJbmRpY2F0b3IpO1xuICAgIHRvZ2dsZUxvYWRpbmdNZXNzYWdlQ3ljbGUoKTtcbiAgfTtcbiAgY29uc3QgdXBkYXRlRGlzcGxheWVkV2VhdGhlciA9ICh3ZWF0aGVyRGF0YSkgPT4ge1xuICAgIGFkZFdlYXRoZXJJY29uKHdlYXRoZXJEYXRhKTtcbiAgICBhZGRXZWF0aGVyTWFpbih3ZWF0aGVyRGF0YSk7XG4gICAgYWRkV2VhdGhlckRlc2NyaXB0aW9uKHdlYXRoZXJEYXRhKTtcbiAgICBhZGRUZW1wZXJhdHVyZUZhaHJlbmhlaXQod2VhdGhlckRhdGEpO1xuICAgIGFkZFRlbXBlcmF0dXJlQ2Vsc2l1cyh3ZWF0aGVyRGF0YSk7XG4gICAgYWRkQ2l0eU5hbWUod2VhdGhlckRhdGEpO1xuICAgIHJlc2V0SW5wdXRWYWx1ZSgpO1xuICB9O1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZURpc3BsYXllZFdlYXRoZXIsXG4gICAgYWRkUGxhY2Vob2xkZXJWYWx1ZXMsXG4gICAgY2hhbmdlRXJyb3JNZXNzYWdlLFxuICAgIHRvZ2dsZUVsZW1lbnREaXNwbGF5LFxuICAgIHRvZ2dsZUxvYWRpbmdJblByb2dyZXNzLFxuICAgIHRvZ2dsZUxvYWRpbmdNZXNzYWdlQ3ljbGUsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgeyBET01NYW5pcHVsYXRpb24gfTtcbiIsImltcG9ydCB7IEFQSVJlcXVlc3QgfSBmcm9tIFwiLi9BUElfcmVxdWVzdF9tb2R1bGVcIjtcbmltcG9ydCB7IGZpbHRlckRhdGEgfSBmcm9tIFwiLi9maWx0ZXJfZGF0YV9tb2R1bGVcIjtcbmltcG9ydCB7IERPTU1hbmlwdWxhdGlvbiB9IGZyb20gXCIuL0RPTV9tYW5pcHVsYXRpb25fbW9kdWxlXCI7XG5cbmNvbnN0IHVzZXJJbnB1dCA9ICgoKSA9PiB7XG4gIGNvbnN0IHN1Ym1pdFVzZXJJbnB1dCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBjaXR5SW5wdXRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2l0eVwiKS52YWx1ZTtcbiAgICBpZiAoY2l0eUlucHV0VmFsdWUgIT09IFwiXCIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQVBJUmVxdWVzdC5nZXRDaXR5V2VhdGhlcihjaXR5SW5wdXRWYWx1ZSk7XG4gICAgICAgIERPTU1hbmlwdWxhdGlvbi51cGRhdGVEaXNwbGF5ZWRXZWF0aGVyKHJlc3BvbnNlKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAgIC8vIE9wZW5XZWF0aGVyTWFwIEFQSSBjYW4ndCBmaW5kIHRoZSBjaXR5IGR1ZSB0byBtaXNzcGVsbGluZyBvciBsYWNrIG9mIGRhdGFcbiAgICAgICAgICBET01NYW5pcHVsYXRpb24uY2hhbmdlRXJyb3JNZXNzYWdlKFxuICAgICAgICAgICAgXCJVaCBvaCwgbG9va3MgbGlrZSBzb21ldGhpbmcgd2VudCB3cm9uZyEgQ2hlY2sgeW91ciBzcGVsbGluZyBvciB0cnkgYSBkaWZmZXJlbnQgY2l0eSFcIlxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MjkpIHtcbiAgICAgICAgICAvLyBPcGVuV2VhdGhlck1hcCBBUEkgcmF0ZSBsaW1pdFxuICAgICAgICAgIERPTU1hbmlwdWxhdGlvbi5jaGFuZ2VFcnJvck1lc3NhZ2UoXG4gICAgICAgICAgICBcIldob2EsIHNsb3cgZG93biB0aGVyZSBwYXJ0bmVyISBTYXZlIHNvbWUgd2VhdGhlciBkYXRhIGZvciB0aGUgcmVzdCBvZiB1cyFcIlxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXJyb3Iuc3RhdHVzID09PSA1MDApIHtcbiAgICAgICAgICBET01NYW5pcHVsYXRpb24uY2hhbmdlRXJyb3JNZXNzYWdlKFxuICAgICAgICAgICAgXCJTb21ldGhpbmcgb3V0IG9mIG91ciBjb250cm9sIGlzIGJyb2tlbi4gVHJ5IGFnYWluIGxhdGVyIVwiXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmVycm9yKEVycm9yKGVycm9yLnN0YXR1c1RleHQpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgRE9NTWFuaXB1bGF0aW9uLnRvZ2dsZUxvYWRpbmdJblByb2dyZXNzKCk7XG4gIH07XG4gIGNvbnN0IHN1Ym1pdFJhbmRvbUlucHV0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGxldCByYW5kb21DaXR5TmFtZTtcbiAgICBsZXQgd2VhdGhlclJlc3BvbnNlO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjaXR5UmVzcG9uc2UgPSBhd2FpdCBBUElSZXF1ZXN0LmdldFJhbmRvbUNpdHkoKTtcbiAgICAgIHJhbmRvbUNpdHlOYW1lID0gZmlsdGVyRGF0YS5nZXRSYW5kb21DaXR5TmFtZShjaXR5UmVzcG9uc2UpO1xuICAgICAgd2VhdGhlclJlc3BvbnNlID0gYXdhaXQgQVBJUmVxdWVzdC5nZXRDaXR5V2VhdGhlcihyYW5kb21DaXR5TmFtZSk7XG4gICAgICBET01NYW5pcHVsYXRpb24udXBkYXRlRGlzcGxheWVkV2VhdGhlcih3ZWF0aGVyUmVzcG9uc2UpO1xuICAgICAgRE9NTWFuaXB1bGF0aW9uLnRvZ2dsZUxvYWRpbmdJblByb2dyZXNzKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDQwNCAmJiByYW5kb21DaXR5TmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vIEdlb0RCIEFQSSBlcnJvclxuICAgICAgICBET01NYW5pcHVsYXRpb24uY2hhbmdlRXJyb3JNZXNzYWdlKFxuICAgICAgICAgIFwiSG1tLCBpdCBzZWVtcyBsaWtlIHdlJ3JlIHJ1bm5pbmcgaW50byBzb21lIHRyb3VibGUuIFRyeSBhZ2FpbiFcIlxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgKGVycm9yLnN0YXR1cyA9PT0gNDA0ICYmIHdlYXRoZXJSZXNwb25zZSA9PT0gdW5kZWZpbmVkKSB8fFxuICAgICAgICBlcnJvci5zdGF0dXMgPT09IDQyOVxuICAgICAgKSB7XG4gICAgICAgIC8vIEdlb0RCIGdhdmUgYSBjaXR5IHRoYXQgaGFzIG5vIGRhdGEgaW4gT3BlbldlYXRoZXJNYXAgQVBJXG4gICAgICAgIHNldFRpbWVvdXQoc3VibWl0UmFuZG9tSW5wdXQsIDE1MDApO1xuICAgICAgfSBlbHNlIGlmIChlcnJvci5zdGF0dXMgPT09IDUwMCkge1xuICAgICAgICBET01NYW5pcHVsYXRpb24uY2hhbmdlRXJyb3JNZXNzYWdlKFxuICAgICAgICAgIFwiU29tZXRoaW5nIG91dCBvZiBvdXIgY29udHJvbCBpcyBicm9rZW4uIFRyeSBhZ2FpbiBsYXRlciFcIlxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgY29uc29sZS5lcnJvcihFcnJvcihgJHtlcnJvci5zdGF0dXN9ICR7ZXJyb3Iuc3RhdHVzVGV4dH1gKSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBhZGRTZWFyY2hCdXR0b25MaXN0ZW5lciA9ICgpID0+IHtcbiAgICBjb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlYXJjaC1idXR0b25cIik7XG4gICAgc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBET01NYW5pcHVsYXRpb24udG9nZ2xlTG9hZGluZ0luUHJvZ3Jlc3MoKSwgc3VibWl0VXNlcklucHV0KCk7XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IGFkZElucHV0RWxlbWVudExpc3RlbmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGNpdHlJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NpdHlcIik7XG4gICAgY2l0eUlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICBET01NYW5pcHVsYXRpb24udG9nZ2xlTG9hZGluZ0luUHJvZ3Jlc3MoKSwgc3VibWl0VXNlcklucHV0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IGFkZFJhbmRvbUJ1dHRvbkxpc3RlbmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHJhbmRvbUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmFuZG9tLWJ1dHRvblwiKTtcbiAgICByYW5kb21CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIERPTU1hbmlwdWxhdGlvbi50b2dnbGVMb2FkaW5nSW5Qcm9ncmVzcygpLCBzdWJtaXRSYW5kb21JbnB1dCgpO1xuICAgIH0pO1xuICB9O1xuICBjb25zdCBhZGRUZW1wZXJhdHVyZUJ1dHRvbkxpc3RlbmVycyA9ICgpID0+IHtcbiAgICBjb25zdCB0ZW1wQnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50ZW1wLWJ1dHRvblwiKSk7XG4gICAgdGVtcEJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGVtcEJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgRE9NTWFuaXB1bGF0aW9uLnRvZ2dsZUVsZW1lbnREaXNwbGF5KGJ1dHRvbik7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IGFkZFVzZXJJbnB1dExpc3RlbmVycyA9ICgpID0+IHtcbiAgICBhZGRTZWFyY2hCdXR0b25MaXN0ZW5lcigpO1xuICAgIGFkZElucHV0RWxlbWVudExpc3RlbmVyKCk7XG4gICAgYWRkUmFuZG9tQnV0dG9uTGlzdGVuZXIoKTtcbiAgICBhZGRUZW1wZXJhdHVyZUJ1dHRvbkxpc3RlbmVycygpO1xuICB9O1xuICByZXR1cm4geyBhZGRVc2VySW5wdXRMaXN0ZW5lcnMgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IHVzZXJJbnB1dCB9O1xuIiwiaW1wb3J0IHsgQVBJUmVxdWVzdCB9IGZyb20gXCIuL0FQSV9yZXF1ZXN0X21vZHVsZVwiO1xuaW1wb3J0IHsgZmlsdGVyRGF0YSB9IGZyb20gXCIuL2ZpbHRlcl9kYXRhX21vZHVsZVwiO1xuaW1wb3J0IHsgdXNlcklucHV0IH0gZnJvbSBcIi4vdXNlcl9pbnB1dF9tb2R1bGVcIjtcbmltcG9ydCB7IERPTU1hbmlwdWxhdGlvbiB9IGZyb20gXCIuL0RPTV9tYW5pcHVsYXRpb25fbW9kdWxlXCI7XG5cbi8vIEFQSVJlcXVlc3QuZ2V0Q2l0eVdlYXRoZXIoXCJTYW4gRnJhbmNpc2NvXCIpXG4vLyAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbi8vICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS53ZWF0aGVyWzBdLmljb24pO1xuLy8gICAgIGNvbnN0IGljb24gPSBmaWx0ZXJEYXRhLmdldFdlYXRoZXJJY29uQ29kZShyZXNwb25zZSk7XG4vLyAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbi8vICAgICBpbWcuc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7aWNvbn0ucG5nYDtcbi8vICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZGl2XCIpO1xuLy8gICAgIGRpdi5hcHBlbmRDaGlsZChpbWcpO1xuLy8gICAgIGNvbnNvbGUubG9nKGZpbHRlckRhdGEuZ2V0V2VhdGhlck1haW4ocmVzcG9uc2UpKTtcbi8vICAgICBjb25zb2xlLmxvZyhmaWx0ZXJEYXRhLmdldFdlYXRoZXJEZXNjcmlwdGlvbihyZXNwb25zZSkpO1xuLy8gICAgIGNvbnNvbGUubG9nKGZpbHRlckRhdGEuZ2V0VGVtcGVyYXR1cmUocmVzcG9uc2UpKTtcbi8vICAgICBjb25zb2xlLmxvZyhmaWx0ZXJEYXRhLmdldFRlbXBlcmF0dXJlRmFocmVuaGVpdChyZXNwb25zZSkpO1xuLy8gICAgIGNvbnNvbGUubG9nKGZpbHRlckRhdGEuZ2V0VGVtcGVyYXR1cmVDZWxzaXVzKHJlc3BvbnNlKSk7XG4vLyAgIH0pXG4vLyAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbi8vICAgfSk7XG4oYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZVBhZ2UoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBUElSZXF1ZXN0LmdldENpdHlXZWF0aGVyKFwiSGVsbFwiKTtcbiAgICBET01NYW5pcHVsYXRpb24udXBkYXRlRGlzcGxheWVkV2VhdGhlcihyZXNwb25zZSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgRE9NTWFuaXB1bGF0aW9uLmFkZFBsYWNlaG9sZGVyVmFsdWVzKCk7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIEVycm9yKFxuICAgICAgICBgJHtlcnJvci5zdGF0dXN9ICR7ZXJyb3Iuc3RhdHVzVGV4dH0uIElmIHlvdSBjYW4gc2VlIHRoaXMsIHRoYXQgbWVhbnMgdGhlcmUgd2FzIGFuIGlzc3VlIHdpdGggdGhlIE9wZW5XZWF0aGVyTWFwIEFQSSFgXG4gICAgICApXG4gICAgKTtcbiAgfVxufSkoKTtcbnVzZXJJbnB1dC5hZGRVc2VySW5wdXRMaXN0ZW5lcnMoKTtcbiJdLCJuYW1lcyI6WyJBUElSZXF1ZXN0IiwiYXN5bmMiLCJjaXR5IiwicmVzcG9uc2UiLCJmZXRjaCIsInN0YXR1cyIsImpzb24iLCJQcm9taXNlIiwicmVqZWN0IiwicmFuZG9tQ2l0eUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibWV0aG9kIiwiaGVhZGVycyIsImZpbHRlckRhdGEiLCJnZXRUZW1wZXJhdHVyZSIsImRhdGEiLCJtYWluIiwidGVtcCIsImdldFRlbXBlcmF0dXJlRmFocmVuaGVpdCIsImZhaHJlbmhlaXQiLCJyb3VuZCIsImdldFRlbXBlcmF0dXJlQ2Vsc2l1cyIsImNlbHNpdXMiLCJnZXRXZWF0aGVyTWFpbiIsIndlYXRoZXIiLCJnZXRXZWF0aGVyRGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsImdldFdlYXRoZXJJY29uQ29kZSIsImljb24iLCJnZXRDaXR5TmFtZSIsIm5hbWUiLCJnZXRSYW5kb21DaXR5TmFtZSIsIkRPTU1hbmlwdWxhdGlvbiIsInRpbWVyIiwidG9nZ2xlRWxlbWVudERpc3BsYXkiLCJlbGVtZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiY2hhbmdlTG9hZGluZ01lc3NhZ2UiLCJtZXNzYWdlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJ3YWl0VGltZXIiLCJkdXJhdGlvbiIsInNldFRpbWVvdXQiLCJ0b2dnbGVMb2FkaW5nTWVzc2FnZUN5Y2xlIiwidXBkYXRlRGlzcGxheWVkV2VhdGhlciIsIndlYXRoZXJEYXRhIiwid2VhdGhlckljb24iLCJzcmMiLCJhZGRXZWF0aGVySWNvbiIsIndlYXRoZXJNYWluIiwiYWRkV2VhdGhlck1haW4iLCJ3ZWF0aGVyRGVzY3JpcHRpb24iLCJhZGRXZWF0aGVyRGVzY3JpcHRpb24iLCJ0ZW1wRiIsImFkZFRlbXBlcmF0dXJlRmFocmVuaGVpdCIsInRlbXBDIiwiYWRkVGVtcGVyYXR1cmVDZWxzaXVzIiwiY2l0eU5hbWUiLCJhZGRDaXR5TmFtZSIsInZhbHVlIiwiYWRkUGxhY2Vob2xkZXJWYWx1ZXMiLCJ3ZWF0aGVySWNvbkVsZW1lbnQiLCJ3ZWF0aGVyTWFpbkVsZW1lbnQiLCJ3ZWF0aGVyRGVzY3JpcHRpb25FbGVtZW50IiwidGVtcEZFbGVtZW50IiwidGVtcENFbGVtZW50IiwiY2l0eU5hbWVFbGVtZW50IiwiY2hhbmdlRXJyb3JNZXNzYWdlIiwidG9nZ2xlTG9hZGluZ0luUHJvZ3Jlc3MiLCJsb2FkaW5nSW5kaWNhdG9yIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJkaXNhYmxlZCIsInVzZXJJbnB1dCIsInN1Ym1pdFVzZXJJbnB1dCIsImNpdHlJbnB1dFZhbHVlIiwiZXJyb3IiLCJjb25zb2xlIiwiRXJyb3IiLCJzdGF0dXNUZXh0Iiwic3VibWl0UmFuZG9tSW5wdXQiLCJyYW5kb21DaXR5TmFtZSIsIndlYXRoZXJSZXNwb25zZSIsImNpdHlSZXNwb25zZSIsInVuZGVmaW5lZCIsImFkZFVzZXJJbnB1dExpc3RlbmVycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImtleSIsInRlbXBCdXR0b25zIiwiYnV0dG9uIiwiYWRkVGVtcGVyYXR1cmVCdXR0b25MaXN0ZW5lcnMiXSwic291cmNlUm9vdCI6IiJ9