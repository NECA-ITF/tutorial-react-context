import { connect } from "react-redux";



function SomeuselessComp(props) {
  

  return <span>{props.count.count}</span>
}

const mapStateToProps = state => ({
  count: state.count
})

export default connect(mapStateToProps)(SomeuselessComp);