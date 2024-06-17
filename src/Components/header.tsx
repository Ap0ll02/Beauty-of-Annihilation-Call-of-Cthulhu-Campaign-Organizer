import React from "react"
import { Route } from "react-router-dom"
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    return (
        <div className="homePage">
            <h1 id="title" >Beauty of Annihilation</h1>
            <hr id="titleBar"></hr>
            <div className="Cards">
                <img src="../Assets/HistoryCards.png"  id="historyCard" onClick={ () => navigate('/story') }/>
                <h2 id="storytxt">Story</h2>
                <img src="../Assets/NPCCard.png" id="npccard" onClick={ () => navigate('/npc') }/>
                <h2 id="npctxt">NPC's</h2>
                <img src="../Assets/SecretCard.png" id="secretcard" onClick={ () => navigate('/secret') }/>
                <h2 id="secrettxt">Secrets</h2>
            </div>
            <h2 className="homeText">The Auction House</h2>
            <p className="homeText">You have all been invited to the auction house, the investigators must arrive to Paris and to the auction by 1800 hours, where everyone will meet for the first time. Perhaps by unfortuante circumstances, or by enjoyable banter prior
                to the auction. The auction is eventually called into session after a bit, and has some items for auction, the night starts out with the following: </p>
            <br></br>
            <ul className="homeText">
                <li className="homeText"><span>The Skull of Saint Peter</span></li>
                <li className="homeText"><span>The Last Will and Testament of Merlin</span></li>
                <li className="homeText"><span>Orders of Nightmares</span></li>
            </ul>
            <br></br>
            <p className="homeText">Many interested bidders are happy to bring the bidding up to hundreds of dollars, most likely leaving all of our players out of the bidding. An intermission is granted and guests are encouraged to eat and drink, finally
                there are more hauntings to start. If some players have the perception or notice, there are some groans they might here. Or they might spot a small body part or bit of flesh on the ground or hidden inside a plant.
                Even a bit of blood trails might be seen by the investigators. They can attempt to sneak around the house the auction is held at and explore for more clues. 
            </p>
            <br></br>
            <h3 className="homeText">Choosing to explore</h3>
            <p className="homeText">Should our investigators decide to explore, the house will have an upstairs where the auction is not being held, but where the blood trail would lead to. If successfully followed, not without darkening skies, and perhaps lightning. Other frightening events will occur. 
                Upon entering the room the blood trail leads to, there will be a dead body in a room. Not a zombie... yet, as this man is lying on the bed, bled out and cold to the touch.
            </p>
            <br></br>
            <h2 className="homeText">Auctioning off the forbidden item</h2>
            <p className="homeText">After auctioning our items, we come across the last item, which is being auctioned off. This item is unnamed, it is being called Numbered Solution. Not very
                exciting, except that it happens to be Element 115. This chemical is capable of creating zombies, unbeknownst to the investigators of course. Under extreme success of perception or the like 
                it can be seen the etched 115 on the bottle. As the auction comes to a close and the winning bid has been placed, all hell breaks loose. The entrance to the auction room is invaded 
                by the man from upstairs, once dead, now undead, walking towards everyone. His features are distorted, grosser, rotten. Teeth and claw-like fingernails, attempting to find a target in the crowd of 
                auction-attendees. Should our investigators choose to fight it, that is fine, should they run this is also fine. It is only one zombie afterall. However, they will have to make a sanity check from this monstruous horror 
                they have now laid their eyes upon. 
            </p>
        </div>
    )
}
export default Header