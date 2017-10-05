class Support {
  constructor() {
    return this;
  }

  init( values ) {
    const {participants_max, participants_val, target, collected, target_elem_id} = values;

    // calculatete valuebar width
    var valuebar_width = Math.ceil( (collected / target) * 100 );
    // cap to 100%
    valuebar_width = valuebar_width > 100 ? 100 : valuebar_width;

    var s = "";
    // valuebar
    s += '<div class="support-box__stats__valuebar">';
    s += '<span style="width:' + valuebar_width + '%;"></span>';
    s += '</div>';
    // participants
    s += '<div class="support-box__stats__participant">';
    s += '<span class="val"><span>' + participants_val.toLocaleString("de-DE") + '</span><span> Mitglier</span></span>';
    s += '<span class="max">von ' + participants_max.toLocaleString("de-DE") + '</span>';
    s += '</div>';
    // collected amount
    s += '<div class="support-box__stats__amount">';
    s += '<span class="val">&euro; ' + collected.toLocaleString("de-DE") + '</span>';
    s += '<span class="max">von &euro; ' + target.toLocaleString("de-DE") + '</span>';
    s += '</div>';


    var target_elem = document.getElementById(target_elem_id);
    target_elem.setAttribute('class', 'support-box__stats');
    target_elem.innerHTML = s;
  }
}

window.Support = Support;
