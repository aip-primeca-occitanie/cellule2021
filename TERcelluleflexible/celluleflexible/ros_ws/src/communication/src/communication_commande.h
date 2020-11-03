/**** Bruno DATO, Abdellah ELGOURAIN, Evgeny SHULGA M1 EEA ISTR Université Paul Sabatier Toulouse III 2016 ****/

#ifndef communication_com
#define communication_com

#include <ros/ros.h>
#include <string>
#include <iostream>
#include "commande_locale/Actionneurs.h"
#include "commande_locale/Capteurs.h"


class Communication_commande
{
private:

	ros::Publisher pub_capteurs;
	ros::Subscriber sub_actionneurs;
	long int CAPTEURS;
	long int ACTIONNEURS;

public:

	Communication_commande(ros::NodeHandle noeud);
	~Communication_commande();

	void Callback_Actionneurs(const commande_locale::Actionneurs msg);
	void publish();
	void Concatenation_entrees(Communication_API_schneider AP1,Communication_API_schneider AP2);
	void Decoupe_sorties(Communication_API_schneider *AP1,Communication_API_schneider *AP2);

};

uint16_t MASK(uint16_t registre,int voie);

#endif
