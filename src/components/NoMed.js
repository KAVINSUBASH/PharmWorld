import React from 'react'
import Card from './Card';
import t1 from '../assests/t1.png' 
import t2 from '../assests/t2.png' 
function NoMed() {
  return (
    <>
        <div className="grid grid-cols-4 gap-2">
      <Card
        title="Paracetamol (Acetaminophen)"
        description="Paracetamol is a common pain reliever used to treat mild to moderate pain and reduce fever. It works by blocking the production of certain chemicals in the brain that cause pain and fever. Paracetamol is often used to relieve headaches, muscle aches, menstrual pain, and toothaches."
        imageUrl={t1}
        price={4}
      />
      <Card
        title="Ibuprofen"
        description=" Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) used to relieve pain, inflammation, and fever. It works by inhibiting the production of prostaglandins, chemicals that cause pain and inflammation in the body. Ibuprofen is commonly used to treat headaches, muscle aches, arthritis, menstrual pain, and minor injuries."
        imageUrl={t2}
        price={32}
      />
      <Card
        title="Aspirin"
        description="Aspirin is a salicylate drug that has anti-inflammatory, analgesic, and antipyretic properties. It works by inhibiting the production of prostaglandins, which are involved in pain, inflammation, and fever. Aspirin is used to relieve mild to moderate pain, reduce fever, and prevent blood clots. It is commonly used to treat headaches, muscle aches, arthritis, and cardiovascular conditions."
        imageUrl={t1}
        price={5}
      />
      <Card
        title="Loratadine"
        description="Loratadine is an antihistamine used to relieve symptoms of allergies, such as sneezing, runny nose, itching, and watery eyes. It works by blocking the action of histamine, a chemical released by the immune system in response to allergens. Loratadine is commonly used to treat seasonal allergies (hay fever) and allergic reactions to substances such as pollen, pet dander, and dust mites."
        imageUrl={t2}
        price={23.6}
      />
      <Card
        title="Omeprazole"
        description="Loratadine is an antihistamine used to relieve symptoms of allergies, such as sneezing, runny nose, itching, and watery eyes. It works by blocking the action of histamine, a chemical released by the immune system in response to allergens. Loratadine is commonly used to treat seasonal allergies (hay fever) and allergic reactions to substances such as pollen, pet dander, and dust mites."
        imageUrl={t1}
        price={92.21}
      />
      <Card
        title="Simvastatin"
        description="Loratadine is an antihistamine used to relieve symptoms of allergies, such as sneezing, runny nose, itching, and watery eyes. It works by blocking the action of histamine, a chemical released by the immune system in response to allergens. Loratadine is commonly used to treat seasonal allergies (hay fever) and allergic reactions to substances such as pollen, pet dander, and dust mites."
        imageUrl={t2}
        price={52.8}
      />
      <Card
        title="Metformin"
        description="Loratadine is an antihistamine used to relieve symptoms of allergies, such as sneezing, runny nose, itching, and watery eyes. It works by blocking the action of histamine, a chemical released by the immune system in response to allergens. Loratadine is commonly used to treat seasonal allergies (hay fever) and allergic reactions to substances such as pollen, pet dander, and dust mites."
        imageUrl={t1}
        price={10.99}
      />
      <Card
        title="Amoxicillin"
        description="Loratadine is an antihistamine used to relieve symptoms of allergies, such as sneezing, runny nose, itching, and watery eyes. It works by blocking the action of histamine, a chemical released by the immune system in response to allergens. Loratadine is commonly used to treat seasonal allergies (hay fever) and allergic reactions to substances such as pollen, pet dander, and dust mites."
        imageUrl={t2}
        price={15.6}
      />
      <Card
        title="Ibuprofen"
        description=" Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) used to relieve pain, inflammation, and fever. It works by inhibiting the production of prostaglandins, chemicals that cause pain and inflammation in the body. Ibuprofen is commonly used to treat headaches, muscle aches, arthritis, menstrual pain, and minor injuries."
        imageUrl={t2}
        price={10}
      />
      <Card
        title="Aspirin"
        description="Aspirin is a salicylate drug that has anti-inflammatory, analgesic, and antipyretic properties. It works by inhibiting the production of prostaglandins, which are involved in pain, inflammation, and fever. Aspirin is used to relieve mild to moderate pain, reduce fever, and prevent blood clots. It is commonly used to treat headaches, muscle aches, arthritis, and cardiovascular conditions."
        imageUrl={t1}
        price={5}
      />
      <Card
        title="Loratadine"
        description="Loratadine is an antihistamine used to relieve symptoms of allergies, such as sneezing, runny nose, itching, and watery eyes. It works by blocking the action of histamine, a chemical released by the immune system in response to allergens. Loratadine is commonly used to treat seasonal allergies (hay fever) and allergic reactions to substances such as pollen, pet dander, and dust mites."
        imageUrl={t2}
        price={30}
      />
      <Card
        title="Amoxicillin"
        description="Loratadine is an antihistamine used to relieve symptoms of allergies, such as sneezing, runny nose, itching, and watery eyes. It works by blocking the action of histamine, a chemical released by the immune system in response to allergens. Loratadine is commonly used to treat seasonal allergies (hay fever) and allergic reactions to substances such as pollen, pet dander, and dust mites."
        imageUrl={t2}
        price={50}
      />
    </div>
    </>
  )
}

export default NoMed