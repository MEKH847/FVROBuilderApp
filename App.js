
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Clipboard, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [breachType, setBreachType] = useState("Presence Breach");
  const [victimStatement, setVictimStatement] = useState("");
  const [suspectStatement, setSuspectStatement] = useState("");
  const [childrenStatus, setChildrenStatus] = useState("Children Present");
  const [riskLevel, setRiskLevel] = useState("Low");
  const [actionsTaken, setActionsTaken] = useState("");
  const [report, setReport] = useState("");

  const generateReport = () => {
    const fullReport = 
`Police attended an FVRO breach incident.

Type of Breach: ${breachType}
Victim stated: ${victimStatement}
Suspect stated: ${suspectStatement}
Children: ${childrenStatus}
Risk Level: ${riskLevel}
Actions Taken: ${actionsTaken}`;

    setReport(fullReport);
    Clipboard.setString(fullReport);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>FVRO Narrative Builder</Text>

      <Text style={styles.label}>Breach Type</Text>
      <Picker selectedValue={breachType} onValueChange={value => setBreachType(value)}>
        <Picker.Item label="Presence Breach" value="Presence Breach" />
        <Picker.Item label="Contact Breach" value="Contact Breach" />
        <Picker.Item label="Digital Breach" value="Digital Breach" />
        <Picker.Item label="Third-Party Breach" value="Third-Party Breach" />
      </Picker>

      <Text style={styles.label}>Victim's Statement</Text>
      <TextInput style={styles.input} multiline value={victimStatement} onChangeText={setVictimStatement} />

      <Text style={styles.label}>Suspect's Statement</Text>
      <TextInput style={styles.input} multiline value={suspectStatement} onChangeText={setSuspectStatement} />

      <Text style={styles.label}>Children Present</Text>
      <Picker selectedValue={childrenStatus} onValueChange={value => setChildrenStatus(value)}>
        <Picker.Item label="Children Present" value="Children Present" />
        <Picker.Item label="No Children Present" value="No Children Present" />
      </Picker>

      <Text style={styles.label}>Risk Level</Text>
      <Picker selectedValue={riskLevel} onValueChange={value => setRiskLevel(value)}>
        <Picker.Item label="Low" value="Low" />
        <Picker.Item label="Moderate" value="Moderate" />
        <Picker.Item label="High" value="High" />
      </Picker>

      <Text style={styles.label}>Actions Taken</Text>
      <TextInput style={styles.input} multiline value={actionsTaken} onChangeText={setActionsTaken} />

      <Button title="Generate Report" onPress={generateReport} />

      {report.length > 0 && (
        <View style={styles.outputContainer}>
          <Text style={styles.outputLabel}>Generated Report:</Text>
          <Text style={styles.output}>{report}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 40 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  label: { marginTop: 15, fontWeight: 'bold' },
  input: { borderColor: '#ccc', borderWidth: 1, padding: 10, marginTop: 5 },
  outputContainer: { marginTop: 30 },
  outputLabel: { fontWeight: 'bold' },
  output: { marginTop: 10, backgroundColor: '#f4f4f4', padding: 10 }
});
