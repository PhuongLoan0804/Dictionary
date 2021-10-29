import React from 'react';
import "./Definitions.css";

const Definitions = ({word, category, meanings}) => {
    return (
        <div className="meanings">
            {word === "" ? (<span className="subTitle">Start by typing a word in Search</span>)
                : (
                    meanings.map((mean) =>
                        mean.meanings.map((item) => 
                            item.definitions.map((def) => (
                                <div className="singleMean" style={{backgroundColor: "white", color: "black"}}>
                                    <b>{def.definition}</b>
                                    <hr style={{backgroundColor: "black", width: "100%"}}/>
                                    {def.example && (
                                        <span>
                                            <b>Example: </b>
                                            {def.example}
                                        </span>
                                    )}
                                    {def.synonyms && (
                                        <span>
                                            <b> Synonym: </b>
                                            {def.synonyms.map((s) => `${s}, `)}
                                        </span>
                                    )}
                                </div>
                            ))
                        )
                    )
                )
            }
        </div>
    )
}

export default Definitions