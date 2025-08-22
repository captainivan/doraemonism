const data = async()=>{
    const api = await fetch(`https://3000-firebase-doraemonism-1755257765695.cluster-6dx7corvpngoivimwvvljgokdw.cloudworkstations.dev/sendMessage`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name:"Alaska",
            message:"Dream big, stay kind."
        })
    })
    const res = await api.json();
    console.log(res);
}
data()