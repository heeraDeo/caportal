const _Footer = (props) => {
  return (
    <div className="text-sm font-normal text-[#71869D] py-1.5">
      <ul>
        <li>
          <button className="hover:text-blue-600">{props.footerlist}</button>
        </li>
      </ul>
    </div>
  );
};
export default _Footer;
