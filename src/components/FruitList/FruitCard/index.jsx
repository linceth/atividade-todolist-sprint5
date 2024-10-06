import { FruitContext } from "../../../providers/FruitContext"
import {useContext} from "react";

export const FruitCard = ({fruit}) => {
    const{removeFruit} = useContext(FruitContext);

    return(
        <li>
            <h3>{fruit.name}</h3>
            <span>{Number(fruit.price).toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
            <button onClick={() => removeFruit(fruit.id)}>Remover</button>
        </li>
    )
}