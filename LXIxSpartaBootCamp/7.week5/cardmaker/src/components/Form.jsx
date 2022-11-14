import Kartu from "./Kartu"
import styled from "styled-components";
import useInput from "../hooks/useInput"

const Form = () => {
  const imagelink = "https://thiscatdoesnotexist.com/"

  const [ title, onChangeHandlerTitle ] = useInput() 
  const [ category, onChangeHandlerCategory ] = useInput()
  const [ icon, onChangeHandlerIcon ] = useInput()
  const [ rarity, onChangeHandlerRarity ] = useInput()
  const [ effect, onChangeHandlerEffect ] = useInput()
  const [ set1, onChangeHandlerSet1 ] = useInput()
  const [ set2, onChangeHandlerSet2 ] = useInput()
  const [ serial, onChangeHandlerSerial ] = useInput()
  const [ edition, onChangeHandlerEdition ] = useInput()
  const [ year, onChangeHandlerYear ] = useInput()
  const [ creator, onChangeHandlerCreator ] = useInput()

  return (
    <StContainerLayout>
      <StContainerPage>
        <StContainerForm>
          <p>Title</p>
          <input value={title} onChange={onChangeHandlerTitle}></input>
          
          <p>Category</p>
          <select onChange={onChangeHandlerCategory}>
            <option value="Kosong">Kosong</option>
            <option value="magic">magic</option>
            <option value="trap">trap</option>
          </select>

          {/* Bagian Spell & Trap */}
          <div style={{visibility: (category==="magic" || category==="trap") ? "visible" : "hidden"}}>
            <p>Icon</p>
            <select onChange={onChangeHandlerIcon}>
              <option value="none">None</option>
              <option value="continuous">Continuous</option>
              <option value="counter">Counter</option>
              <option value="equip">Equip</option>
              <option value="field">Field</option>
              <option value="quick-play">Quick-Play</option>
              <option value="ritual">Ritual</option>
            </select>

            <p>Rarity</p>
            <select onChange={onChangeHandlerRarity}>
              <option value="common">common</option>
              <option value="silver">Silver</option>
              <option value="gold">Gold</option>
            </select>

            <p>Effect</p>
            <input value={effect} onChange={onChangeHandlerEffect}></input>

            <StContainerHorizontal>
              <p>Set1</p>
              <input value={set1} onChange={onChangeHandlerSet1}></input>

              <p>Set2</p>
              <input value={set2} onChange={onChangeHandlerSet2}></input>
            </StContainerHorizontal>

            <StContainerHorizontal>
              <p>Serial #</p>
              <input value={serial} onChange={onChangeHandlerSerial}></input>

              <p>Edition</p>
              <input value={edition} onChange={onChangeHandlerEdition}></input>
            </StContainerHorizontal>
            
            <StContainerHorizontal>
              <p>Year</p>
              <input value={year} onChange={onChangeHandlerYear}></input>
              
              <p>Creator</p>
              <input value={creator} onChange={onChangeHandlerCreator}></input>
            </StContainerHorizontal>
          </div>
          
        </StContainerForm>
        <StCardPage>
          <Kartu
            title={title}
            imagelink={imagelink}
            category={category}
            effect={effect}
            icon={icon}
            rarity={rarity}
          />
        </StCardPage>
      </StContainerPage> 
    </StContainerLayout>
  ) 
}

export default Form

const StContainerLayout = styled.div`
  margin: 0 auto;
  max-Width: 1200px;
  min-Width: 800px;
`

const StContainerPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StContainerForm = styled.div`
  width: 30%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StCardPage = styled.div`
  max-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
`

const StContainerHorizontal = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`