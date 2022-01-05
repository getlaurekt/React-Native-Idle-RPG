import React from "react";
import { Text, View, Dimensions } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import THEME from "../utils/theme";

const item = require(".././assets/item.png");

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const WeaponList = () => {
  return (
    <>
      <Container>
        <Card>
          <CardBody>
            <Row style={{ flexGrow: 0, flexDirection: "row" }}>
              <IconContainer>
                <Icon source={item} />
              </IconContainer>
            </Row>
            <Row>
              <RowTop>
                <ProgressBar>
                  <ProgressBarText>50%</ProgressBarText>
                  <ProgressBarFill width={50} />
                </ProgressBar>
                <InfoBtn>
                  <Ionicons name="information" size={20} color="white" />
                </InfoBtn>
              </RowTop>
              <RowBottom>
                <LevelContainer>
                  <LevelText>Lv.10</LevelText>
                </LevelContainer>
                <BuyBtn>
                  <BuyText>500 Gold</BuyText>
                </BuyBtn>
              </RowBottom>
            </Row>
          </CardBody>
        </Card>
        <Card>
          <CardBody></CardBody>
        </Card>
      </Container>
    </>
  );
};

export default WeaponList;

const Container = styled.View`
  width: ${windowWidth}px;
  height: ${windowHeight}px;
  padding: 20px;
  background-color: ${THEME.SECONDARY};
  align-items: center;
`;

const Card = styled.View`
  width: 100%;
  height: 100px;
  background-color: ${THEME.PRIMARY};
  border-radius: 10px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  margin-bottom: 20px;
`;

const CardBody = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
`;

const Row = styled.View`
  flex-shrink: 0;
  flex-grow: 1;
`;

const RowTop = styled.View`
  flex-basis: 100%;
  flex-shrink: 1;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

const RowBottom = styled.View`
  flex-basis: 100%;
  flex-shrink: 1;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

const IconContainer = styled.View`
  flex-basis: 100px;
  height: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  border-width: 3px;
  border-color: green;
  background-color: ${THEME.ACCENT};
`;

const Icon = styled.Image`
  transform: rotate(-25deg) scale(0.75);
`;

const ProgressBar = styled.View`
  flex-grow: 1;
  height: 30px;
  background-color: #18181b;
  border-radius: 5px;
  justify-content: center;
`;

const ProgressBarText = styled.Text`
  position: absolute;
  width: 100%;
  z-index: 1;
  text-align: center;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
`;

const ProgressBarFill = styled.View`
  height: 100%;
  width: ${(props) => props.width}%;
  background-color: ${THEME.EXP};
  border-radius: 5px;
`;

const InfoBtn = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  margin-left: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${THEME.SECONDARY};
  border: 1px solid gray;
  border-radius: 10px;
`;

const LevelContainer = styled.View`
  flex-grow: 1;
  margin-right: 10px;
  height: 30px;
  background-color: ${THEME.EXP};
  padding: 0px 10px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const LevelText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
`;

const BuyBtn = styled.TouchableOpacity`
  flex-grow: 1;
  margin-left: 10px;
  height: 30px;
  padding: 0px 5px;
  background-color: ${THEME.GOLD};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

/* const BuyBtn = styled.TouchableOpacity`
  position: absolute;
  right: -2.75px;
  bottom: 0px;
  height: 30px;
  width: 100px;
  background-color: ${THEME.GOLD};
  border-radius: 10px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 0px;
  justify-content: center;
  align-items: center;
`; */

const BuyText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
`;
