import React, {Component} from 'react';  
import './Konversi_oktal.css'

class Konversi_oktal extends Component{
    render(){
        return(
            <center>
            <div className="layer1">
                <div className="titlelayer">
                <h6>Konversi Bilangan Oktal</h6>
                </div>
                <table>
                   
                    <tr>
                        <td>
                            <div class="form-group">
                            <label name="pilihan" value="8">Oktal</label>
                            <input name="nilaiAwal" class="form-control" onChange={this.nilaiAwal} />
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div class="form-group">
                            <label >Pilihan Konversi</label>
                            <select className="form-control" name="konversi" onChange={this.konversi}>
                                <option>Pilih Konversi -</option>
                                <option name="konversi" value="10">Desimal</option>
                                <option name="konversi" value="2">Biner</option>
                                <option name="konversi" value="8">Oktal</option>
                                <option name="konversi" value="16">Heksadesimal</option>
                            </select>
                            </div>
                        </td>
                    </tr>
                                    
                </table>             
                <button className="btn btn-danger" onClick={this.hitung}>Convert</button>
                <hr/>
                <h6>Hasil</h6>
                <input className="form form-control" name="hasil" value={this.state.hasilAkhir} disabled />
            </div>
            </center>
        );
    }
    
    constructor(){
        super();
        this.state = {
           pilihan: '',
           konversi: '',
           nilaiAwal: 0,
           hasilAkhir: ''
        }
    }

    pilihan = (event) => {
        this.setState({pilihan: event.target.value});
    }

    konversi = (event) => {
        this.setState({konversi: event.target.value});
    }

    nilaiAwal = (event) => {
        this.setState({nilaiAwal: event.target.value});
    }

    hitung = () => {
        let pilihan = this.state.pilihan
        let konversi = this.state.konversi
        let nilaiAwal = this.state.nilaiAwal

    if (konversi == 8){
        this.setState({hasilAkhir: nilaiAwal})
    }
    else if (konversi == 10){
        let oktal = nilaiAwal*1
        let desimal = parseInt(oktal, 8)
        this.setState({hasilAkhir: desimal})
    }
    else if (konversi == 2){
        let oktal = nilaiAwal*1
        let desimal = parseInt(oktal, 8)
        let biner = desimal.toString(2)
        this.setState({hasilAkhir: biner})
    }
    else if (konversi == 16){
        let oktal = nilaiAwal*1
        let desimal = parseInt(oktal, 8)
        let heksa = desimal.toString(16).toUpperCase()
        this.setState({hasilAkhir: heksa})
    }
}
    
}
export default Konversi_oktal;