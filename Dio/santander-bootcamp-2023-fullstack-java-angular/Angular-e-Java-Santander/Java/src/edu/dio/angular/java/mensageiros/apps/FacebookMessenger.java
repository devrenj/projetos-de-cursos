package edu.dio.angular.java.mensageiros.apps;

public class FacebookMessenger extends AplicativosDeMensagem {

  String name = "Facebook Messenger";
  
  public void iniciarSistema() {
    System.out.println("Inicializando " + name);
  }
  
  public void enviarMensagem(){
    System.out.println(name + " está enviando uma mensagem");
  }
  public void receberMensagem(){
    System.out.println(name + " recebeu uma nova mensagem");
  }

}
