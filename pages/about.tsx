import { Card, InnerSection, MainSection, Text, TitleText } from "@/src/styles";

const About = () => {
  return (
    <MainSection width="100%">
      <InnerSection>
        <Card flex alignitems="center">
          <TitleText color="green" size="24px" flexratio="1">
            Hi, I am JayB
          </TitleText>
          <Text color="green" size="12px" flexratio="1">
            That's my name
          </Text>
        </Card>
      </InnerSection>
    </MainSection>
  );
};

export default About;
