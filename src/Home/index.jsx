import React, { useEffect, useState } from "react";

function Home(){
    const [Departamentos, setDepartamentos]=useState(null);
    const [Capitales, setCapitales]=useState(null);

    useEffect(() => {
    const urlDpt =
      "https://gist.githubusercontent.com/diaztibata/fe3d238ee6b59ef71c8001654441a9f6/raw/4974a1b1cab3ac606dd96aa2d34d6e7c8e007daf/departamentosglobal.json";
    const urlCpt =
      "https://gist.githubusercontent.com/diaztibata/fe3d238ee6b59ef71c8001654441a9f6/raw/4974a1b1cab3ac606dd96aa2d34d6e7c8e007daf/capitalesglobal.json";

    const fetchJson = async (url, setter) => {
      try {
        const resp = await fetch(url);
        if (!resp.ok) throw new Error("Error al cargar JSON: " + resp.status);
        const json = await resp.json();
        setter(json);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchJson(urlDpt, setDepartamentos);
    fetchJson(urlCpt, setCapitales);
  }, []);


    return(
        <>
        <div>
            <button onClick={() => setModo("departamentos")}>Mostrar Departamentos</button>
            <button onClick={() => setModo("capitales")}>Mostrar Capitales</button>

          <button>
        Mostrar Capitales
        </button>
      </div>

      <div className="lugar">
        {
            !Capitales ? (
                <p>Cargando...</p>

            ) : (
                Capitales.data.cpt.map((item) => (
                    <p key={item.id}>
                        {item.nm}
                    </p>)
                )
            )
        }
        <p>Municipio <span>Numero de votos</span></p>
        <div>
            <p>Candidatos: </p>
            <ul>
            <li>candidato1</li>
            <li>candidato2</li>
            </ul>
            </div>
        </div>
        <input
          type="text"
          placeholder="Buscar por nombre..." 
       
        />
        Home
        </>
    )
}

export default Home