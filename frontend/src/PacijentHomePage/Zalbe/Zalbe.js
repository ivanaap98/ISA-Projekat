export default function Zalbe(){
    return (
        <main id="background" className="bg-fixed h-screen w-screen">
         <div
         style={{
         position : 'absolute', left : '50%', top : '45%',
         transform : 'translate(-50%, -40%)'
          }}>

            <h1>***Zalbe pacijenta***</h1>
            
            <label className="p-10" for="w3review">Zalba:</label>
            
            <textarea id="w3review" name="w3review" rows="4" cols="50" >
             Uneti zalbu.... 
            </textarea>
            </div>
        </main>
       
        
    )
}