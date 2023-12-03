import React from "react"
import ContentLoader from "react-content-loader"

const UnitLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={350}
    height={390}
    viewBox="0 0 350 390"
    backgroundColor="#c4c4c4"
    foregroundColor="#dedede"
    {...props}
  >
    <circle cx="214" cy="129" r="8" /> 
    <circle cx="12" cy="135" r="8" /> 
    <rect x="0" y="0" rx="6" ry="6" width="350" height="175" /> 
    <rect x="19" y="190" rx="6" ry="6" width="179" height="30" /> 
    <rect x="15" y="236" rx="6" ry="6" width="326" height="20" /> 
    <rect x="356" y="457" rx="6" ry="6" width="320" height="10" /> 
    <rect x="16" y="267" rx="6" ry="6" width="326" height="20" /> 
    <rect x="17" y="301" rx="6" ry="6" width="326" height="20" /> 
    <circle cx="28" cy="363" r="13" /> 
    <circle cx="324" cy="362" r="13" />
  </ContentLoader>
)

const MyLoader = ()=> {

    return <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        <UnitLoader/>
        <UnitLoader/>
        <UnitLoader/>
        <UnitLoader/>
        <UnitLoader/>
        <UnitLoader/>
    </div>

}

export default MyLoader