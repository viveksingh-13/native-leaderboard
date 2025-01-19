import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import NewModal from "./components/modal";

const LeaderBoard = () => {
  const [showModal, setShowModal] = useState(false);
  const [sendItem, setSendItem] = useState({});
  const onClickListData = (item: any) => {
    setSendItem(item);
    setShowModal(true);
    console.log("sfsdasd1", item);
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.headerTitle}>Leader Board</Text>
          <View style={styles.mainCardContainer}>
            {LeaderBoardData.map((item, index) => {
              return (
                <View
                  style={[
                    styles.mainCard,
                    item?.rank !== "1" && { marginTop: 30 },
                  ]}
                  key={index}
                >
                  <Image
                    source={{
                      uri: "https://fastly.picsum.photos/id/866/450/300.jpg?hmac=LjxXLARrOTbivRrQD3Z2n3fNVwGNy21JDJduhoRLJ-s",
                    }}
                    style={styles.mainCardImage}
                    resizeMode="cover"
                  />
                  <Text style={styles.mainCardTitle}>{item?.name}</Text>
                  <View style={styles.mainCardRankContainer}>
                    <Text style={styles.mainCardRankContainerTitle}>
                      {item?.rank}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
        <FlatList
          data={listData}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                onPress={() => onClickListData(item)}
                style={styles.card}
                activeOpacity={0.8}
              >
                <View style={styles.cardDataContainer}>
                  <Text style={styles.cardIndex}>{index + 1}</Text>
                  <Image
                    source={{
                      uri: item?.imageUrl,
                    }}
                    style={styles.cardImage}
                  />
                  <Text style={styles.cardTitle}>{item?.name}</Text>
                </View>
                <View style={styles.cardRankContainer}>
                  <Text style={styles.cardRankTitle}>{item?.score}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        ></FlatList>
      </View>
      <NewModal
        sendItem={sendItem}
        show={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
};

export default LeaderBoard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#272C35",
  },
  topContainer: {
    backgroundColor: "#1A1F25",
    paddingTop: 30,
    padding: 20,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    gap: 20,
    paddingBottom: 60,
  },
  headerTitle: {
    textAlign: "center",
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  mainCardContainer: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
  },
  mainCard: {
    backgroundColor: "#272C35",
    padding: 20,
    alignItems: "center",
    borderRadius: 10,
    gap: 15,
    height: 170,
  },
  mainCardImage: {
    width: 90,
    height: 90,
    borderRadius: 20,
  },
  mainCardTitle: {
    color: "white",
    fontSize: 17,
    fontWeight: 600,
  },
  mainCardRankContainer: {
    backgroundColor: "orange",
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    position: "absolute",
    bottom: -15,
  },
  mainCardRankContainerTitle: {
    color: "white",
  },
  card: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  cardDataContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  cardIndex: {
    color: "white",
  },
  cardImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginLeft: 15,
  },
  cardTitle: {
    color: "white",
    fontSize: 18,
  },
  cardRankTitle: {
    color: "white",
  },
  cardRankContainer: {
    justifyContent: "center",
  },
});

const LeaderBoardData = [
  {
    rank: "3",
    score: "230,345",
    name: "Vivek Singh",
    imageUrl:
      "https://fastly.picsum.photos/id/866/450/300.jpg?hmac=LjxXLARrOTbivRrQD3Z2n3fNVwGNy21JDJduhoRLJ-s",
  },
  {
    rank: "1",

    score: "120,400",
    name: "Ananya Gupta",
    imageUrl:
      "https://fastly.picsum.photos/id/77/450/300.jpg?hmac=V_LawevwSaVitpQs2t7AnuBi84UPSNl1Qp3PmKkmaXc",
  },
  {
    rank: "2",

    score: "190,123",
    name: "Rahul Mehta",
    imageUrl:
      "https://fastly.picsum.photos/id/840/450/300.jpg?grayscale&hmac=uG5iNudlwiaKw2pk4TsxmidqSlBcnWCob2R18nT4ugA",
  },
];

const listData = [
  {
    score: "230,345",
    name: "Vivek Singh",
    imageUrl:
      "https://fastly.picsum.photos/id/866/450/300.jpg?hmac=LjxXLARrOTbivRrQD3Z2n3fNVwGNy21JDJduhoRLJ-s",
  },
  {
    score: "120,400",
    name: "Ananya Gupta",
    imageUrl:
      "https://fastly.picsum.photos/id/77/450/300.jpg?hmac=V_LawevwSaVitpQs2t7AnuBi84UPSNl1Qp3PmKkmaXc",
  },
  {
    score: "190,123",
    name: "Rahul Mehta",
    imageUrl:
      "https://fastly.picsum.photos/id/840/450/300.jpg?grayscale&hmac=uG5iNudlwiaKw2pk4TsxmidqSlBcnWCob2R18nT4ugA",
  },
  {
    score: "305,780",
    name: "Priya Sharma",
    imageUrl:
      "https://fastly.picsum.photos/id/599/450/300.jpg?blur=5&hmac=IoXx7MxwXlWmLW3BUvsiHJ2NonkGNUwZaMCuRh4MQiQ",
  },
  {
    score: "145,890",
    name: "Amit Verma",
    imageUrl:
      "https://fastly.picsum.photos/id/152/3888/2592.jpg?hmac=M1xv1MzO9xjf5-tz1hGR9bQpNt973ANkqfEVDW0-WYU",
  },
  {
    score: "289,567",
    name: "Nisha Agarwal",
    imageUrl:
      "https://fastly.picsum.photos/id/52/3888/2592.jpg?hmac=RwCeYpUEmU7f7bmIMWYRDrujFc8MqTHcUQmgztI5jnU",
  },
  {
    score: "270,456",
    name: "Rohit Roy",
    imageUrl:
      "https://fastly.picsum.photos/id/11/3888/2592.jpg?hmac=dkM-BSWi2m7YAH3n-fvvXSzUS4k668DYPBZ6UVoJN10",
  },
  {
    score: "220,342",
    name: "Pooja Das",
    imageUrl:
      "https://fastly.picsum.photos/id/122/3888/2592.jpg?hmac=xkROmdWG_MzDmpTM2MTawXrpURb60jcTqzkxatKBbOk",
  },
  {
    score: "185,293",
    name: "Karan Patel",
    imageUrl:
      "https://fastly.picsum.photos/id/92/3888/2592.jpg?hmac=zjtfq2PUyiCMP_fW5nSOu7R7ORcLetm-M3gyCPwNMKI",
  },
  {
    score: "310,670",
    name: "Meera Khan",
    imageUrl:
      "https://fastly.picsum.photos/id/2/3888/2592.jpg?hmac=H2kj1bNmSkXNECY4B4sHjQzZVa05ruYwqevOOYs4Q8A",
  },
  {
    score: "265,890",
    name: "Vikas Sharma",
    imageUrl: "https://picsum.photos/id/870/200/300?grayscale&blur=2",
  },
  {
    score: "220,567",
    name: "Seema Gupta",
    imageUrl: "https://picsum.photos/200/300?grayscale",
  },
  {
    score: "245,789",
    name: "Ankit Verma",
    imageUrl: "https://picsum.photos/200",
  },
  {
    score: "190,231",
    name: "Tina Roy",
    imageUrl: "https://picsum.photos/200/300?grayscale",
  },
  {
    score: "299,670",
    name: "Sohan Das",
    imageUrl: "https://picsum.photos/200/300/?blur=2",
  },
  {
    score: "275,234",
    name: "Ramesh Gupta",
    imageUrl: "https://picsum.photos/200/300/?blur",
  },
  {
    score: "220,890",
    name: "Sunil Verma",
    imageUrl: "https://picsum.photos/id/237/200/300",
  },
  {
    score: "230,768",
    name: "Anjali Roy",
    imageUrl: "https://picsum.photos/200/300?grayscale",
  },
  {
    score: "265,123",
    name: "Ajay Sharma",
    imageUrl: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    score: "295,890",
    name: "Rajesh Patel",
    imageUrl: "https://picsum.photos/200/300?grayscale",
  },
];
