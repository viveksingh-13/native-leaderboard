import React from "react";
import { View, Text, Image, Button } from "react-native";
import Modal, { ReactNativeModal } from "react-native-modal";

interface modalIs {
  sendItem?: any;
  show?: boolean;
  setShowModal?: (value: boolean) => void;
}

const NewModal = ({ show, setShowModal, sendItem }: modalIs) => {
  const buttonClose = () => {
    setShowModal && setShowModal(false);
  };

  return (
    <View>
      <ReactNativeModal
        isVisible={show}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={800} // Adjusts the animation speed (in ms)
        animationOutTiming={800} // Adjusts the exit animation speed
        onBackdropPress={buttonClose} // Closes modal on backdrop press
        style={{
          justifyContent: "flex-end",
          margin: 0,
        }}
      >
        <View
          style={{
            backgroundColor: "#272C35",
            borderRadius: 20,
            padding: 20,
          }}
        >
          <View
            style={{
              alignItems: "flex-end",
              marginBottom: 20,
            }}
          >
            <Button title="Close" onPress={buttonClose} />
          </View>

          <View
            style={{
              alignItems: "center",
              gap: 20,
            }}
          >
            <Image
              style={{
                height: 100,
                width: 150,
                borderRadius: 10,
                marginBottom: 20,
              }}
              source={{
                uri: sendItem?.imageUrl,
              }}
            />
            <Text
              style={{
                color: "white",
                fontSize: 20,
              }}
            >
              {sendItem && sendItem.name}
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 20,
              }}
            >
              {sendItem && sendItem.score}
            </Text>
          </View>
        </View>
      </ReactNativeModal>
    </View>
  );
};

export default NewModal;
