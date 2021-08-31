import React  from "react";
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

import ReactPDF  from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';



// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4', 
    flex: 1
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});


function FinalStep(props) {
  return (
    <>
      <PDFViewer>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>titre du prosit : {props.state.title}</Text>
            <Text>lien vers le prosit : {props.state.link}</Text>
            <Text>Generalisation : {props.state.general}</Text>
            <Text>Contexte : {props.state.context}</Text>
      
            <Text>animateur du prosit : {props.state.animateur}</Text>
            <Text>gestionnaire du  prosit : {props.state.gestionnaire}</Text>
            <Text>scribe du prosit : {props.state.scribe}</Text>
            <Text>secretaire : {props.state.secretaire}</Text>
      
            <Text>groupe : {props.state.groupe}</Text>
            <Text>Année scolaire : {props.state.grad}</Text>
          </View>
          <View style={styles.section}>
            <Text>problematique : {props.state.problematic}</Text>
            <Text>key worlds : {props.state.keyworlds}</Text>
            <Text>contraintes : {props.state.constraint} </Text>
          </View>
          <View style={styles.section}>
            <Text>plant dactions : {props.state.actions} </Text>
            <Text>hypotheses : {props.state.hypotheses}</Text>
          </View>
          <View style={styles.section}>
            <Text>ressources : {props.state.resource} </Text>
          </View>
        </Page>
      </Document> 
      </PDFViewer>
    </>
   
  );
}


export default FinalStep;
