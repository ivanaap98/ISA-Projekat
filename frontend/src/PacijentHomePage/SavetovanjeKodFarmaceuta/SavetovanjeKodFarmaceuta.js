export default function SavetovanjeKodFarmaceuta(){
    return (
        <main>
            <h1>Savetovanje kod farmaceuta</h1>
            <label for="pregleddatumivreme">Datum i vreme pregleda:</label>
            <input type="datetime-local" id="regleddatumivreme" name="regleddatumivreme"/>
            <input type="submit"></input>
        </main>
    )
}