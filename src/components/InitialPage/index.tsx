import * as C from './styles';
import horse from '../../assets/img/dead-horse.png';

export const InitialPage = () => {
    return (
        <C.Container>
            <C.Content>
                <C.Image src={horse} alt="Horse"/>
                <C.TextPrimary>Don't know what to search?</C.TextPrimary>
                <C.TextSecundary>Here's an offer you can't refuse</C.TextSecundary>
            </C.Content>
        </C.Container>
    );
}