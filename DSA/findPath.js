
function getResultByPath(path, obj) {
    const keys = path.replace(/\[(\d+)\]/g, '.$1').split('.');
    console.log("🚀 ~ getResultByPath ~ keys:", keys)
  
    let current = obj;
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
  
      if (current === null) {
        return null; // stop if intermediate value is null
      }
      if (current === undefined) {
        return undefined; // stop if path doesn't exist
      }
  
      current = current[key];
      
    }
    return current;
  }
  const path = "data.results.status";
  const obj = {
    data: {
      results:
      {
        status: "completed",
        error: "",
      }
    },
  }

  let result = getResultByPath(path,obj)
//   console.log("🚀 ~ result:", result)
