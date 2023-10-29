package edu.dio.angular.java.mensageiros.apps;

public class MSNMessenger extends AplicativosDeMensagem {
  
  String name = "MSNMessenger";


  @Override
  public void enviarMensagem(){
    System.out.println(name + " está enviando uma mensagem");
  }
  
  public void receberMensagem(){
    System.out.println(name + " recebeu uma nova mensagem");
  }

  // A ordem da função não importou, pois na classe abstrata é a primeira
  // a variável 'name' foi obrigada a ser passada com 'this.name'
  @Override
  public void iniciarSistema() {
    System.out.println("Inicializando " + name);
  }
}
