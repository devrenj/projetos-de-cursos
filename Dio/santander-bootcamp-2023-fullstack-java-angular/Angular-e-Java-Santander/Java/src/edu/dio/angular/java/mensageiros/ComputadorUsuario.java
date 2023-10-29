package edu.dio.angular.java.mensageiros;

import edu.dio.angular.java.mensageiros.apps.AplicativosDeMensagem;
import edu.dio.angular.java.mensageiros.apps.FacebookMessenger;
import edu.dio.angular.java.mensageiros.apps.MSNMessenger;
import edu.dio.angular.java.mensageiros.apps.Telegram;

public class ComputadorUsuario {
  public static void main(String[] args) {
    AplicativosDeMensagem smi = null;

    String app = "tme";

    if (app.equals("msn")) {
        smi = new MSNMessenger();
      } else if (app.equals("tme")) {
        smi = new Telegram();
      } else if (app.equals("fb")){
        smi = new FacebookMessenger();
      }

      smi.iniciarSistema();
      smi.enviarMensagem();
      smi.receberMensagem();
    }

    
}
