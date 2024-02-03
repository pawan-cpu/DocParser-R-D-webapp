import React from 'react';
import {Text} from "@chakra-ui/react";
import useAuth from "@/hooks/useAuth";
import PageHeader from "@/components/Utilities/PageHeader";
import { useState, useEffect } from "react";

const TypeWriter = ({ content = "", speed = 1000 }) => {
    const [displayedContent, setDisplayedContent] = useState("");
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const animKey = setInterval(() => {
        setIndex((index) => {
        
          if (index >= content.length - 1) {
            clearInterval(animKey);
            return index;
          }
          return index + 1;
        });
      }, speed);
    }, []);
  
    useEffect(() => {
      setDisplayedContent((displayedContent)=>displayedContent + content[index]) 
    }, [index])
  
    return <pre className="type-writer">{displayedContent}</pre>;
  };

const HomeHeader = () => {

    const { user } = useAuth();
    const sample_content = 'Welcome to Inno'
    const demo = 'Tutor'

    return (
        <PageHeader
            imageSrc={'/logo.png'}
            imageAlt={'Edu Chat Logo'}
            heading={
                <>
                    {/*<Text
                        as='span'
                    >
                        Welcome to Inno
                    </Text>*/}
                    <TypeWriter content={sample_content} speed={100} />
                    {/*<Text
                        as='span'
                        color={'brand.500'}
                    >
                        Tutor
                    </Text>*/}
                    <TypeWriter content={demo} speed={100} />
                    {
                        user && user.name && (
                            <Text
                                as='span'
                            >
                                , {user.name.split(' ')[0]}
                            </Text>
                        )
                    }

                </>
            }
            subheading={
                "Empowering Educators, Elevating Exams"
            }
        />
    );
};

export default HomeHeader;
