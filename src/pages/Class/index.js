import {useState, useEffect} from "react"

import getMaterialById from "services/getMaterialById"

export default function ClassPage({ params }) {
    const id = params.class
    const [material, setMaterial] = useState()

    useEffect(() => {
        getMaterialById({id}).then(material => setMaterial(material))
    }, [id])

    return (
        <section className="flex flex-col gap-5 py-5 px-10 w-full">
            <iframe src={material.linkVideo} title={material.modulo}/>
        </section>
    )
}