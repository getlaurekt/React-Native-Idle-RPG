import React, { useState } from "react";
import { StatusBar, Text, View, Image } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import THEME from "../utils/theme";

const damian = require(".././assets/damian.png");
const goldIcon = require(".././assets/gold.png");
const diamondIcon = require(".././assets/diamond.png");

function intToString(num) {
  num = num.toString().replace(/[^0-9.]/g, "");
  if (num < 1000) {
    return num;
  }
  let si = [
    { v: 1e3, s: "K" },
    { v: 1e6, s: "M" },
    { v: 1e9, s: "B" },
    { v: 1e12, s: "T" },
    { v: 1e15, s: "P" },
    { v: 1e18, s: "E" },
  ];
  let index;
  for (index = si.length - 1; index > 0; index--) {
    if (num >= si[index].v) {
      break;
    }
  }
  return (
    (num / si[index].v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") +
    si[index].s
  );
}

function App() {
  const [gold, setGold] = useState(0);
  const [diamond, setDiamond] = useState(0);
  return (
    <>
      <StatusBar />
      <TopBar>
        <CenterAvatar>
          <AvatarContainer>
            <Avatar source={damian} />
            <AvatarBadgeLevel>
              <AvatarBadgeLevelText>10</AvatarBadgeLevelText>
            </AvatarBadgeLevel>
          </AvatarContainer>
        </CenterAvatar>
        <ContainElements>
          <ElementsRow>
            <GoldContainer>
              <GoldIcon source={goldIcon} />
              <GoldText>{intToString(gold)}</GoldText>
              <AddGold
                onPress={() => {
                  setGold(gold + Math.floor(Math.random() * 1000000000) + 10);
                }}
              >
                <Ionicons name="add" size={16} color="white" />
              </AddGold>
            </GoldContainer>
            <DiamondContainer>
              <DiamondIcon source={diamondIcon} />
              <DiamondText>{diamond}</DiamondText>
              <AddDiamond
                onPress={() => {
                  setDiamond(diamond + 1000);
                }}
              >
                <Ionicons name="add" size={16} color="white" />
              </AddDiamond>
            </DiamondContainer>
            <OptionContainer>
              <OptionBtn>
                <Ionicons name="settings-sharp" size={14} color="white" />
              </OptionBtn>
            </OptionContainer>
          </ElementsRow>
          <ElementsRow>
            <ExpContainer>
              <ExpBar>
                <ExpBarText>50%</ExpBarText>
                <ExpBarFill width={50} />
              </ExpBar>
            </ExpContainer>
            <LevelUpBtn>
              <LevelUpBtnText>Add Stats</LevelUpBtnText>
            </LevelUpBtn>
          </ElementsRow>
        </ContainElements>
      </TopBar>
    </>
  );
}

export default App;

const TopBar = styled.View`
  background-color: ${THEME.PRIMARY};
  height: 80px;
  width: 100%;
  flex-direction: row;
`;

const CenterAvatar = styled.View`
  align-items: center;
  justify-content: center;
`;

const AvatarContainer = styled.View`
  margin: 10px;
`;

const Avatar = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  border-width: 2px;
  border-color: green;
`;

const AvatarBadgeLevel = styled.View`
  min-width: 20px;
  height: 20px;
  position: absolute;
  top: 0px;
  right: 0px;
  justify-content: center;
  background-color: green;
  border: 1px solid black;
  border-radius: 50px;
  padding: 2px;
`;

const AvatarBadgeLevelText = styled.Text`
  color: white;
  font-size: 10px;
  font-weight: bold;
  text-align: center;
`;

const ContainElements = styled.View`
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-evenly;
`;

const ElementsRow = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px;
`;

const GoldContainer = styled.View`
  height: 25px;
  margin-right: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${THEME.ACCENT};
  border-radius: 50px;
`;

const GoldIcon = styled.Image`
  width: 18px;
  height: 18px;
  margin-left: 5px;
`;

const GoldText = styled.Text`
  color: ${THEME.GOLD}};
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 0px 10px;
`;

const AddGold = styled.TouchableOpacity`
  height: 100%;
  padding: 0px 5px;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${THEME.GOLD};
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
`;

const DiamondContainer = styled.View`
  height: 25px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${THEME.ACCENT};
  border-radius: 50px;
`;

const DiamondIcon = styled.Image`
  width: 18px;
  height: 18px;
  margin-left: 5px;
`;

const DiamondText = styled.Text`
  color: ${THEME.DIAMOND};
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 0px 10px;
`;

const AddDiamond = styled.TouchableOpacity`
  height: 100%;
  padding: 0px 5px;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${THEME.DIAMOND};
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
`;

const OptionContainer = styled.View`
  height: 25px;
  margin: auto;
  justify-content: center;
  align-items: center;
`;

const OptionBtn = styled.TouchableOpacity`
  height: 25px;
  width: 25px;
  justify-content: center;
  align-items: center;
  background-color: ${THEME.SECONDARY};
  border: 1px solid gray;
  border-radius: 50px;
`;

const ExpContainer = styled.View`
  height: 25px;
  width: 150px;
  padding: 2px 0px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`;

const ExpBarText = styled.Text`
  position: absolute;
  width: 100%;
  z-index: 1;
  text-align: center;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
`;

const ExpBar = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${THEME.ACCENT};
  justify-content: center;
  border-radius: 50px;
`;

const ExpBarFill = styled.View`
  height: 100%;
  width: ${(props) => props.width}%;
  background-color: ${THEME.EXP};
  border-radius: 50px;
`;

const LevelUpBtn = styled.TouchableOpacity`
  height: 25px;
  width: 100px;
  margin: auto;
  padding: 0px 5px;
  background-color: ${THEME.EXP};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;

const LevelUpBtnText = styled.Text`
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
`;
