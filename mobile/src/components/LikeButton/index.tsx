import { FontAwesome } from '@expo/vector-icons';
import { Modal, TouchableOpacity, View, Text } from 'react-native';
import { LikeButtonProps } from './interface';
import { useEffect, useState } from 'react';
import useAuth from '../../context/auth';
import styles from './style';

export default function LikeButton(props:LikeButtonProps) {

    // STATES
    const {usuario} = useAuth();
    const [isLiked, setIsLiked] = useState(false);
    const [showModal, setShowModal] = useState(false);

    // LIFECYCLE

    useEffect(()=>{

        switch(props.type) {
            case 'pontoturistico':
                break;
            case 'servico':
                break;
            case 'evento':
                break;
            case 'guia':
                break
        }

    },[])

    // METHODS

    const handleLike = () => {
        // TODO: LOGICA DO LOGIN NO BOTAO DO LIKE
        // SE EXISTIR USUARIO LOGADO
        if (usuario){
            setIsLiked(!isLiked);
        } else {setShowModal(true)}
        // SE NÃO EXISTIR USUARIO LOGADO
        // ABRIR MODAL DE LOGIN
    }

    return (
        <View>
            <TouchableOpacity onPress={handleLike}>
                {isLiked ? <FontAwesome name="heart" size={props.size} color="red" /> : <FontAwesome name="heart-o" size={props.size} color="black" />}
            </TouchableOpacity>

            <Modal visible={showModal}>
                <View style={styles.modalContent}>
                    <Text>Para curtir um item é necessário estar logado</Text>
                    <TouchableOpacity onPress={()=>setShowModal(false)}>
                        <Text>Fechar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>

        </View>
    )
}